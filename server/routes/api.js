const express = require('express');
const router = express.Router();

const mongoose= require('mongoose');
 
// connecting to the database

mongoose.connect('mongodb://localhost/videoplayer');

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// handling error
db.on('error',console.error.bind(console,'error connecting to db'));



router.get('/',function(req,res)
{
    res.send('api works');
});

module.exports = router;