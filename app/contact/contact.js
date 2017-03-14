'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', [function() {

  var nbaTeams = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: 'https://twitter.github.io/typeahead.js/data/nba.json'
    });

    var nhlTeams = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: 'https://twitter.github.io/typeahead.js/data/nhl.json'
    });

    $('#multiple-datasets .typeahead').typeahead({
      highlight: true
    },
    {
      name: 'nba-teams',
      display: 'team',
      source: nbaTeams,
      templates: {
        header: '<h3 class="league-name">NBA Teams</h3>'
      }
    },
    {
      name: 'nhl-teams',
      display: 'team',
      source: nhlTeams,
      templates: {
        header: '<h3 class="league-name">NHL Teams</h3>'
      }
    });

}]);