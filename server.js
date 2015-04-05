// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var Llama = require('./models/llama');
var Comment = require('./models/comment');
var bodyParser = require('body-parser');
var router = express.Router();
var chess10JSON = require('./data/chess10.json');
var chess11JSON = require('./data/chess11.json');

//replace this with your Mongolab URL
mongoose.connect('mongodb://dgaeta:mula2010@ds059661.mongolab.com:59661/portfolio-db');

// Create our Express application
var app = express();

// Use environment defined port or 4000
var port = process.env.PORT || 4000;

//Allow CORS so that backend and frontend could pe put on different servers
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT", "OPTIONS", "DELETE");
  next();
};
app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// All our routes will start with /api
app.use('/api', router);

//Default route here
var homeRoute = router.route('/');

homeRoute.get(function(req, res) {
  res.json({ message: 'Hello World!' });
});

//Llama route 
var llamaRoute = router.route('/llamas');

llamaRoute.get(function(req, res) {
  res.json([{ "name": "alice", "height": 12 }, { "name": "jane", "height": 13 }]);
});

//Chess10 route 
var chess10Route = router.route('/chess10');

chess10Route.get(function(req, res) {
  res.json(chess10JSON);
});

var chess11Route = router.route('/chess11');

chess11Route.get(function(req, res) {
  res.json(chess11JSON);
});

var addCommentRoute = router.route('/addComments');

addCommentRoute.get(function(req, res) {
  var comment = new Comment();
  comment.id = 1;
  comment.save(function (err, comment) {
  if (err) return console.error(err);
});
  res.json({"status":"success"});
});

// Start the server
app.listen(port);
console.log('Server running on port ' + port); 