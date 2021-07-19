const dbconnect = require('../Config/config.db');

const User = function(user){
    this.user_email     = user.user_email;
    this. user_password = user.user_password;
}

////////////////////////////////////////////////////////////////////////////////////////
// getUsersList MySQL query string to retreive from database. //
User.getUsersList = (result) =>{
    dbconnect.query('SELECT * FROM authentication.users', (err, res)=>{
        if(err){
            console.log("Error fetching users", err);
            result(null,err);
        }else{
            console.log("Users fetched successfully");
            result(null,res);
        }
    });
};

// get user by ID from data base. (working)//
User.getUserByID = (id, result)=>{
    dbconnect.query('SELECT * FROM users WHERE user_id=?', id, (err, res)=>{
        if(err){
            console.log("Error fetching users by id", err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// createNewUser MySQL query to creating a new user.// 
User.createNewUser = (userReqData, result) =>{
    dbconnect.query('INSERT INTO authentication.users (email, password)?', users, function (error, result, fields) {
        if (error) {
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
          } else {
            res.send({
              "code":200,
              "success":"user registered sucessfully"
                });
            }
        });
}

// loginUser MySQL query string to login user from database validation. //
User.loginUser = (req, result) => {
    dbconnect.query('SELECT * FROM authentication.users WHERE (user_email, user_password) LIKE (user_email, user_password)?', users, function (error, result, fields) {
        if (error) {
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
          } else {
            res.send({
              "code":200,
              "success":"user loggedin sucessfully"
                });
            } 
    })
}


module.exports = User;

