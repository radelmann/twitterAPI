var env = require('../config/env.js')

var error = function(err, response, body) {
  console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function(data) {
  console.log('Data [%s]', data);
};
''
var config = {
  "consumerKey": env.twitter.consumerKey,
  "consumerSecret": env.twitter.consumerSecret,
  "accessToken": env.twitter.accessToken,
  "accessTokenSecret": env.twitter.accessTokenSecret,
  "callBackUrl": env.twitter.callBackUrl
}

var Twitter = require('twitter-node-client').Twitter;
var twitter = new Twitter(config);

twitter.getUserTimeline({ screen_name: 'bobman10', count: '10'}, error, success);