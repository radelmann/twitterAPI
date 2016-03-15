angular.module('twitterAPI.tweets', [])
  .controller('tweetsController', function($scope, tweets) {
    $scope.data = {};
    $scope.data.tweets = [];
    $scope.data.screenName = '';

    $scope.submitSearch = function() {
      tweets.get($scope.data.screenName).then(function(data) {
        $scope.data.tweets = data;
      });
    };
  });