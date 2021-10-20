const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchma = new Schema({
    title:String,
    url: String,
    description: String
});

module.exports=mongoose.model('video',videoSchma,'videos')