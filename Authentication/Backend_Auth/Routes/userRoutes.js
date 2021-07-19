const express = require("express");
const userRoute = express.Router();

const userController = require('../../controllers/usersControllers/userController');

// user routers below. //
// getUsersList in Database.//
userRoute.get('/', userController.getUsersList);

// getUserById in Database.//
userRoute.get('/:id', userController.getUserByID);

// loginUser verifying with database.//
//userRoute.post('/login', userController.loginUser);

// createNewUser in Database. //
userRoute.post('/register', userController.createNewUser);
// upDateUser in Database. //

// deleteUser in Database. //

module.exports = userRoute;
