const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki.js')

router.get('/', function(req, res, next) {
	res.render('index'); 
})

router.use('/wiki', wikiRouter)


module.exports = router;
