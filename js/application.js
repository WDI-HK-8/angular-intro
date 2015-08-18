var app = angular.module('angular-intro', []);

app.controller('MovieFinderController', ['$scope', '$http', function($scope, $http) {

  $scope.findMovie = function(){
    var keys = ['Title', 'Year', 'Rated', 'Released', 'Runtime', 'Genre', 'Director', 'Writer', 'Actors', 'Language', 'Country', 'Awards'];

    $scope.keys = keys;

    $http.get("http://www.omdbapi.com/?t=" + $scope.title).success(function(response){
      $scope.poster = response["Poster"];

      $scope.attrs = [];

      for (var i = 0; i < keys.length; i++) {
        $scope.attrs.push({
          key: keys[i],
          value: response[keys[i]]
        });
      }
    });
  };
}]);