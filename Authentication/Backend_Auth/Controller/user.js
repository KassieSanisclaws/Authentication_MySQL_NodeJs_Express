const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils");
const jwt = require("jsonwebtoken");


////////////////////////////////////////////////////////////////////////////////////////
// getUsersList. (api-working)//
exports.getUsersList = (req, res)=> {
    //console.log('here all users in sql db');
    User.getUsersList((err, users) =>{
        console.log("Displaying List Of:");
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users)
    })
};

///////////////////////////////////////////////////////////////////////////////////////
// geat user by ID. (api-working)//
exports.getUserByID = (req, res)=>{
    //console.log('get emp by id');
    User.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        res.send(user);
    })
}

///////////////////////////////////////////////////////////////////////////////////////
// 
exports.createNewUser = async(req, res) => {
    const user = await new User({
      email     : req.body.email,
      password  : bcrypt.hashSync(req.body.password, 10), // this line unhandled promis suspect .then is needed. rememeber.//
      token: generateToken(user),
    })
          User.createNewUser = await user.save();
           console.log('User Created Successfully!', user);
           res.send(user);
  
          /* ({ email    : email,
            password : hashSync }).then(() => {
              res.json("User Created Successfully!");
              console.log('Created User!:', user);
            }).catch((err) => {
        if (err) {
          res.status(400).json({error: err });
           }
         });
      })
  });*/

///////////////////////////////////////////////////////////////////////////////////////
//
exports.loginUser = (req, res) => {
    // authentication login. //
    const user = User.findOne({ email: req.body.email});
    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                email: user.email,
                token: generateToken(user)
            });
           return;
            }
        }
        res.status(401).send({ message: 'Invalid Email & or Password'});
}};