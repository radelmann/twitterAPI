angular.module('twitterAPI.tweets', [])
  .controller('tweetsController', function($scope, tweets) {
    $scope.data = {};
    $scope.data.tweets = [];

    $scope.data.userName = '';
    $scope.data.userDescription = '';
    $scope.data.userPhoto = '';
    $scope.data.userHandle = '';
    $scope.data.screenName = '';
    $scope.data.retweetFilter = 0;
    $scope.data.displayPhotos = true;

    $scope.submitSearch = function() {
      tweets.get($scope.data.screenName).then(function(data) {
        console.dir(data);

        if (data.length > 0 && $scope.data.displayPhotos === true) {
          //check for image in tweet
          for (var i = 0; i < data.length; i++) {
            if (data[i].entities.media) {
              data[i].img = data[i].entities.media[0].media_url;
            } else {
              data[i].img = "";
            }
          }
        }

        $scope.data.userName = data[0].user.name;
        $scope.data.userHandle = '@' + data[0].user.screen_name;
        $scope.data.userPhoto = data[0].user.profile_image_url;
        $scope.data.userDescription = data[0].user.description;

        $scope.data.tweets = data;
      });
    };

    $scope.retweetFilterFn = function(tweet) {
      return tweet.retweet_count >= parseInt($scope.data.retweetFilter);
    };
  });