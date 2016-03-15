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

app.listen(env.port, function() {
  console.log('listening on port...' + env.port);
});