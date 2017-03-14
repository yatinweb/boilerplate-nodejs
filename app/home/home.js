//https://github.com/eddiemoore/angular-spotify
var app = angular.module('myApp.home', ['ngRoute', 'spotify']);

app.config(['$routeProvider', 'SpotifyProvider', function($routeProvider, SpotifyProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'SpotifyCtrl'
  });

  SpotifyProvider.setClientId('0e03bdcf17e940d4a25ad0b7f28f957e');
  SpotifyProvider.setRedirectUri('http://localhost:8000/app/callback.html');
  SpotifyProvider.setScope('user-follow-read user-follow-modify user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  // If you already have an auth token
  SpotifyProvider.setAuthToken('94e01fbf273e483691c61507ec75f825');
}]);

app.controller('SpotifyCtrl', function($scope, Spotify){

    $scope.searchtype = 'artist';
    $scope.searchArtist = function () {
      console.log('searchtype' + $scope.searchtype);
      Spotify.search($scope.searchartist, $scope.searchtype).then(function (data) {
        if($scope.searchtype == 'artist'){
          $scope.artists = data.artists.items;
        }
        if($scope.searchtype == 'album'){
          $scope.artists = data.albums.items;
          console.log($scope.artists);
        }
      });
    };

    $('#radioBtn a').on('click', function(){
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#'+tog).prop('value', sel);
        $scope.searchtype = sel;
        $scope.searchArtist();
        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
    })
    
});


