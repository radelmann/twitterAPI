angular.module('twitter-api.services', [])

.factory('tweets', function($http) {

  var get = function() {
    return $http({
        method: 'GET',
        url: '/api/tweets/'
      })
      .then(function(resp) {
        return resp.data;
      });
  };

  return {
    get: get
  };
});