var express = require('express');
var app = express();
var env = require('./config/env.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//setup middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//set static client routes based on DEV/PROD env
if (env.version === 'DEV') {
  app.use(express.static('client'));
} else {
  app.use(express.static('client/dist'));
  app.use('/bower_components', express.static('client/bower_components'));
}

require('./routes.js')(app);

app.listen(env.port, function() {
  console.log('listening on port...' + env.port);
});

module.exports = app;