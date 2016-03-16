angular.module('twitterAPI.tweets', [])
  .controller('tweetsController', function($scope, tweets) {
    $scope.data = {};
    $scope.data.tweets = [];

    $scope.data.userName = '';
    $scope.data.userDescription = '';
    $scope.data.userPhoto = '';
    $scope.data.screenName = '';

    $scope.submitSearch = function() {
      tweets.get($scope.data.screenName).then(function(data) {
        console.dir(data);

        //check for image in tweet
        for (var i = 0; i < data.length; i++) {
          if (data[i].entities.media) {
            data[i].img = data[i].entities.media[0].media_url;
          }
        }

        if (data.length > 0) {
          $scope.data.userName = data[0].user.name;
          $scope.data.userPhoto = data[0].user.profile_image_url;
          $scope.data.userDescription = data[0].user.description;
        }
        $scope.data.tweets = data;
      });
    };
  });