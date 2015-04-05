// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var CommentSchema   = new mongoose.Schema({
  name: String,
  yourname: String, 
  comment: String,
  newcomment: String,
  nodes: []
});

// Export the Mongoose model
module.exports = mongoose.model('Comment', CommentSchema);