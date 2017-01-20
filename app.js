const express = require('express'); 
const app = express(); 
const morgan = require('morgan'); 
const nunjucks = require('nunjucks'); 
const bodyParser = require('bodyParser');


app.use(express.static(path.join(__dirname, '/public')));


