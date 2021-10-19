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


// body parser

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',api);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port,function()
{
  console.log("Server running on localhost:" + port);
})

