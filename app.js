const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const models = require('./models');
const path = require('path');


//const server = app.listen(1337, () => console.log('listening on Port 1337'));

app.use(express.static(path.join(__dirname, '/public')));

models.User.sync({})
	.then(function() {
		return models.Page.sync({})
	})
	.then(function() {
		server.listen(3000, function() {
			console.log('Server is listening on port 3001!');
		});
	})
	.catch(console.error);