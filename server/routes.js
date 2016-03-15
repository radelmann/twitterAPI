var twitter = require('./controllers/twitter.js');

module.exports = function(app) {
  app.get('/api/get/:screenName', twitter.get);
}