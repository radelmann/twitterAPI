angular.module('twitter-api', [
    'twitter-api.services',
    'twitter-api.tweets',
    'ngRoute'
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/tweets/tweets.html',
        controller: 'tweetsController'
      })
      .otherwise('/');
  });