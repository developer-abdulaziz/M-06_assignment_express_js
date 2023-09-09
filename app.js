//call express js
const express = require('express');

//Make obj from express js
const app = new express();
const router = require('./src/Routes/api');


//Application Route
app.use('/api',router);

//Export App Module
module.exports = app;