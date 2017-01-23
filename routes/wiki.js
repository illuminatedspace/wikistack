const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page; 
var User = models.User; 

router.get('/', function(req, res, next) {
	res.redirect('/'); 
})

router.post('/', function(req, res, next) {
	res.json(req.body); 

	var title = req.body.title; 
	var content = req.body.content; 

	// STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  var page = Page.build({
    title: title, 
    content: content
  });

   // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save().then(function(){
  	res.redirect('/'); 
  });
  // -> after save -> res.redirect('/');
//});


})

router.get('/add', function(req, res, next) {
    res.render('addpage')
})



module.exports = router;
