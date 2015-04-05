// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var CodeProjectSchema   = new mongoose.Schema({
  filename: String,
  path: String,
  size: Number,
  author: String,
  revision: Number,
  description: String,
});

// Export the Mongoose model
module.exports = mongoose.model('CodeProject', CodeProjectSchema);