var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  userName: String,
  body: String,
  date: String,
});

mongoose.model('Comment', CommentSchema);
