const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port = 3000;

// instance of express
const app = express();

// specify the floder where all angluar code is
// this going to give   express access to angular

app.use(express.static(path.join(__dirname,'dist')));