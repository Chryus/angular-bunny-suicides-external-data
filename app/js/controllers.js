'use strict';

var bunApp = angular.module('bunApp', []);

bunApp.controller('BunListCtrl', function($scope) {
  $scope.bunnies = [
    { "id": 1,
      "name": "noah",
      "bio": "Religion is the opiate of the masses",
      "color": "white",
      "personality": "sensible if not pretentious",
      "method": "premeditated, elaborate drowning"
      },
    { "id": 2,
      "name": "sharko",
      "bio": "It is better to perish than to idly stand by while other animals are kept in cages.",
      "color": "white",
      "personality": "fatally idealistic",
      "method": "shark attack"
      },
    { "id": 3,
      "name": "pacifist",
      "bio": "I cannot bear an unjust war",
      "color": "white",
      "personality": "commited to the cause",
      "method": "political assisination"
    }
]
});