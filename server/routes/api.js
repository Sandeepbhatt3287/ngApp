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
    console.log('get request for all videos');
    Video.find({})
    .exec(function(err,videos)
    {
        if (err){
            console.log("ERROR!!! retrieving vidoes");
        }else{
            res.json(videos);
        }
    })
});


router.get('/videos/:id',function(req,res)
{
    // res.send('api works');
    console.log('get request for single video');
    Video.findById(req.params.id)
    .exec(function(err,video)
    {
        if (err){
            console.log("ERROR!!! retrieving vidoe");
        }else{
            res.json(video);
        }
    })
});



// getting post request

router.post('./video',function(req,res){
    console.log('Post a video');
    var newVideo =new Video();

    newVideo.title =req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err,insertedVideo){
        if (err){
            console.log('Error saving video');
                }else{
                    res.json(insertedVideo);
                }
    })
});

// put request


router.put('/video/:id',function(req,res)
   {
      console.log('update a video');
      Video.findByIdAndUpdate(req.params.id,
        {
          $set:{title:req.body.title, url:req.body.url, description:req.body.description}
      },
      {
          new:true
      },
      function(err,updatedVideo)
      {
          if (err)
          {
              res.send("error updating video");
          }else{
              res.json(updatedVideo);
          }
      }
      )
  });
module.exports = router;