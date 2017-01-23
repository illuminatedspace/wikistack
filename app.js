const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const models = require('./models');
const path = require('path');
const router = require('./routes');


app.use(express.static(path.join(__dirname, '/public')));

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

models.User.sync({})
	.then(function() {
		return models.Page.sync({});
	})
  .then(function() {
    models.Page.sync({});
  })
  .then(function() {
    return models.Page.sync({});
  })
	.then(function() {
		app.listen(3000, function() {
			console.log('Server is listening on port 3000!');
		});
  })
	.catch(console.error);


nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', router);
