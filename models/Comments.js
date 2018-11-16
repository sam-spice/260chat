var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  userName: String,
  body: String,
  date: { type: Date, default: Date.now },
});

mongoose.model('Comment', CommentSchema);
