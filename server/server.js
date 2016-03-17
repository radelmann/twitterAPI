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

//set static client route
app.use(express.static('client'));

require('./routes.js')(app);

app.listen(env.port, function() {
  console.log('listening on port...' + env.port);
});

module.exports = app;