const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const util = require("../utils");
const jwt = require("jsonwebtoken");
const dbconnect = require('../Config/config.db');

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
exports.createNewUser = (req, res) => {
         const email = req.body.email;
         const password = req.body.password;   
// check if the input fields all have been filled by user. //        
            if(email && password === 0){
                 res.status(400).json({ success: false, message: "Please Have All Fields Completed Before Submission!"});
          } else{
// check for user in database. performming a query. // 
       dbconnect.query('SELECT * FROM users WHERE user_email = ?', [req.body.email], (e, result) => { 
            if(e){
                res.status(500).json({ success: false, message: "An Error Occurred While Creating User!"});
              }else{
// check to see if there is a user already with the email in database, if there is an error response is sent back. //                
                if(result.length === 1){
                   res.status(401).json({ success: false, message: "User Already In Use!" });
                }else{
                  if(result.length === 0){
            dbconnect.query('INSERT INTO users VALUES "user_email" AND "user_password"  = ? ', [req.body.email, req.body.password],  (e,result) => { 
            if(e){
              res.status(500).json({ success: false, message: "And Error Occured Creating User!"});
            }else{
              if(result){
                 return res.status(201).json({ success: true, message: "User created Successfully!"});
              }
             
            }
              } 
   
       )}}}})}
          }
               
              
///////////////////////////////////////////////////////////////////////////////////////
// loginUser bcrypt.//






///////////////////////////////////////////////////////////////////////////////////////
//
exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    // Checks the email and password fields for null. //
       if(email && password === 0){
           res.send(400).json({ success: false, message: "Please Complete All Fields!"});
        } else{
          dbconnect.query('SELECT * FROM users WHERE user_email = ? ', [req.body.email], (err,result) => {
            if(err){
              res.status(500).send("An Error Occurred While Verifying The user");
          }else{
            // if user does not exit in the database. //
            if(result.length === 0){
              res.status(401).json({ success: false, message: "The User Does Not Exist! " });
            }else{
              if(password === result[0].user_password){
                const user = {id: result[0].user_id, email: result[0].user_email}
                res.send({ 
                  _id: result[0].user_id,
                  email: result[0].user_email,
                  token: util.generateToken(user)
                })
              }
              else{
                  // incorrect password. //
                  return res.status(401).send("The Password Is Incorrect");
                }
              }
           }
       })
     }
  
     
    
  }
  
                

