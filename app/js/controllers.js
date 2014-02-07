'use strict';

var bunApp = angular.module('bunApp', []);

bunApp.controller('BunListCtrl', function($scope, $http) {
  $http.get('bunnies/bunnies.json').success(function(data) {
    $scope.bunnies = data
  })
  $scope.orderProp = 'name'; // by default, order everything alphabetically
});