const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('hello');
  next();
})

router.post('/', function(req, res, next) {

})

router.get('/add', function(req, res, next) {
  res.send('add is working');
})



module.exports = router;
