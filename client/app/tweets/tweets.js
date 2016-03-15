angular.module('twitter-api.tweets', [])
  .controller('tweetsController', function($scope, tweets) {
    $scope.data = {};

    .getAll().then(function(data) {
      $scope.data.tweets = data;
    });

  });