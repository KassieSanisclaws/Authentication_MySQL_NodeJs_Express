const User = require("../../models/userModel/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateToken = require("../../utils");
const expressAsyncHandler = require("express-async-handler");



////////////////////////////////////////////////////////////////////////////////////////
// getUsersList. (api-working)//
module.exports.getUsersList = (req, res)=> {
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
// geatUserByID. (api-working).//
module.exports.getUserByID = (req, res)=>{
    //console.log('get emp by id');
    User.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        res.send(user);
    })
};

///////////////////////////////////////////////////////////////////////////////////////
// 
module.exports.createNewUser = async(req, res) => {
  const user = await new User({
    firstname : req.body.firstname,
    lastname  : req.body.lastname,
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
// loginUser verifying validation in MySQL database email & password set by user. testing//
/*module.exports.loginUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const user = await User.findOne(email);
  
      if (user[0].length !== 1) {
        const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
      }
  
      const storedUser = user[0][0];
  
      const isEqual = await bcrypt.compare(password, storedUser.password);
  
      if (!isEqual) {
        const error = new Error('Wrong password!');
        error.statusCode = 401;
        throw error;
      }
  
      const token = jwt.sign(
        {
          email: storedUser.email,
          userId: storedUser.id,
        },
        'secretfortoken',
        { expiresIn: '1h' }
      );
      res.status(200).json({ token: token, userId: storedUser.id });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }}*/
  };
