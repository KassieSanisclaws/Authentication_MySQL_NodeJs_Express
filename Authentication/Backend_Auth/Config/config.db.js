const mysql2 = require("mysql2");
const dotenv = require ("dotenv");
dotenv.config();

// this creates the mysql connection using the secret credentials to make the connection. //
const dbconnect = mysql2.createConnection({
        host        : process.env.HOST,
        user        : process.env.USERNAME,
        database    : process.env.DATABASE,
        password    : process.env.PASSWORD,
        port        : process.env.DB_PORT
});

// this is the mysql connection string to the database. //
dbconnect.connect(function(error) {
      if (error) throw error;
      console.log("My SQL Database Connected Successfully!");
});

module.exports = dbconnect;
