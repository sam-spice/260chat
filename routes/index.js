var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

router.get('/getmessages', function(req, res, next) {
  Comment.find(function(err, comments){
    if(err){ return next(err); }
    console.log(comments);
    res.json(comments);
  });
});

router.post('/sendmessage', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.save(function(err, comment){
    if(err){ return next(err); }
    res.json(comment);
  });
});

router.get('/delete', function(req, res, next){
  Comment.collection.remove();
  console.log('Deleting all entries!');
  res.json('{ "name":"John" }');
  
});
module.exports = router;