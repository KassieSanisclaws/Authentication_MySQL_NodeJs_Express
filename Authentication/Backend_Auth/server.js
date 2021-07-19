const dotenv =require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/users/userRoutes");
const app = express();
dotenv.config();

//////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Accept, X-Requested-With, Origin");
    next();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Api Call Routes. //
app.use('/api/user', userRoute);

      
// Server Api Call. //
app.get('/', (req, res) => {
    res.send("Server Is Ready")
});

// Error Api Call Message. //
app.use((err, req, res, next) => {
    res.status(500).send({ message:err.message })
});

// Server Port Listening Api Call. //
const port = process.env.APP_PORT || 54441;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

module.exports = app;
