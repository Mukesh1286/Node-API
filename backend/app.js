const express = require('express');
const app = express();



const bodyParser = require('body-parser')
const dotenv = require('dotenv');


//Setting up config file
dotenv.config({ path: 'backend/config/config.env'})



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Import all routes
const products = require('./routes/product')



app.use('/api/v1', products)


module.exports = app