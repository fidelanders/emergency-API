const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const pageroute = require("./route/index")
const app = express();
const connectDB = require("./database/db")
const PORT = process.env.PORT || 8080;

const mongoose = require('mongoose');


// landing page
app.get("/", (req, res, next) => {
    res.json('WELCOME TO EMERGENCY REPORTING API')
    next()
});


app.use(express.json());
//mounting landing route
app.use('/api', pageroute);

//database connect
connectDB();

// connecting and listening to server 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
