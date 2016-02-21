'use strict';

/* Controllers */

var slimfireControllers = angular.module('slimfireControllers', []);

slimfireControllers.controller('DashboardCtrl', ['$scope', 
  function($scope) {
    $scope.phone = "testphone"
  }]);
