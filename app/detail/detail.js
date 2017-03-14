var app = angular.module('myApp.detail', ['ngRoute', 'spotify']);

app.config(['$routeProvider', 'SpotifyProvider', function($routeProvider, SpotifyProvider) {
  $routeProvider.when('/detail/:id', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  }); 
}])


app.controller('DetailCtrl', function($scope, Spotify, $routeParams){

  Spotify.getArtistAlbums('spotify:artist:'+$routeParams.id).then(function (data) {
      $scope.artists = data.items;
    });

});