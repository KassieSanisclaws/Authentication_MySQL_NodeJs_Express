const dbconnect = require("../../config/config.db");

const User = function(user) {
     this.user_firstname  = user.user_firstname;
     this.user_lastname   = user.user_lastname;
     this.user_email      = user.user_email;
     this.user_password   = user.user_password;
     this.created_at  = newDate();
     this.updated_at  = newDate();
};

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

// getUserByID MySQL query to retreive from database.(working)//
User.getUserByID = (id, result) => {
    dbconnect.query('SELECT * FROM users WHERE user_id=?', id, (err, res)=>{
        if(err){
            console.log("Error fetching users by id", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

// createNewUser MySQL query to creating a new user.// 
User.createNewUser = (userReqData, result) =>{
    dbconnect.query('INSERT INTO authentication.users SET ?', users, function (error, result, fields) {
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


        
module.exports = User;

