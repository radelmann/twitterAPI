var env = require('../config/env.js')
var config = {
  "consumerKey": env.twitter.consumerKey,
  "consumerSecret": env.twitter.consumerSecret,
  "accessToken": env.twitter.accessToken,
  "accessTokenSecret": env.twitter.accessTokenSecret,
  "callBackUrl": env.twitter.callBackUrl
}

var Twitter = require('twitter-node-client').Twitter;
var twitter = new Twitter(config);

module.exports = {
  get: function(req, res, next) {
    var screenName = req.params.screenName;
    twitter.getUserTimeline({
      screen_name: screenName,
      count: '20'
    }, function(err) {
      res.status(err.statusCode || 500);
      res.json(err);
    }, function(data) {
      res.status(200);
      res.json(data);
    });
  }
}