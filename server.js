const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/User');

const mongo_uri = 'mongodb://localhost/react-auth';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(mongo_uri, function(err){
  if(err){
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/home',function(req,res) {
  res.send('Welcome!');
});

app.get('/api/secret', function(req,res) {
  res.send('The password is potato');
});

app.post('/api/register', function(req,res) {
  console.log("reached");
  const {email, password} = req.body;
  const user = new User({email, password});
  user.save(function(err) {
    if(err) {
      res.status(500).send("Error registering new user. Please try again.");
    } else {
      res.status(200).send("welcome to the club!")
    }
  });
});

app.listen(process.env.PORT || 8080);