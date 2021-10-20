const express = require('express');
const router = express.Router();

const mongoose= require('mongoose');

const Video = require('../models/video');
 
// connecting to the database

mongoose.connect('mongodb://localhost/videoplayer');

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// handling error
db.on('error',console.error.bind(console,'error connecting to db'));



router.get('/videos',function(req,res)
{
    // res.send('api works');
    console.log('get reuest for all videos');
    Video.find({})
    .exec(function(err,videos)
    {
        if (err){
            console.log("ERROR!!! retrieving vidoes");
        }else{
            res.json(vidoes);
        }
    })
});

module.exports = router;