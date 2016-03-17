angular.module('twitterAPI', [
    'twitterAPI.services',
    'twitterAPI.tweets',
    'ngRoute'
  ])
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/tweets/tweets.html',
        controller: 'tweetsController'
      })
      .otherwise('/');
  }]);