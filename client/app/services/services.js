angular.module('twitterAPI.services', [])

.factory('tweets', ['http', function($http) {

  var get = function(screenName) {
    return $http({
        method: 'GET',
        url: '/api/get/' + screenName
      })
      .then(function(resp) {
        return JSON.parse(resp.data);
      }, function(err) {
        return [];
      });
  };

  return {
    get: get
  };
}]);