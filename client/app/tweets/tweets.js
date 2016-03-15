angular.module('twitterAPI.tweets', [])
  .controller('tweetsController', function($scope, tweets) {
    $scope.data = {};
    $scope.data.tweets = [1,2,3,4,5];
    
    $scope.data.list = [1,2,3,4,5];

    tweets.get().then(function(data) {
      //console.log(data);
      $scope.data.tweets = data;

      console.log(Array.isArray($scope.data.tweets));
    });

  });