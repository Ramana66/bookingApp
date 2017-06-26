var express = require('express');
const bodyParser= require('body-parser');
var app = express();
var db = require('./db');
var user = require('./user');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function (req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/updateseat',user.updateSeats);
app.get('/getseats', user.seeResults);
app.get('/login', user.userlogin);
//app.delete('/seatdelete', user.delete);

app.listen(3000, function () {
  console.log('Example app liston port 3000!');
});