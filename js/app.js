'use strict';

/* App Module */

var slimfireApp = angular.module('slimfireApp', [
  'ngRoute',
  'slimfireControllers'
  //'slimfireServices'
]);

slimfireApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      }).
      when('/flot', {
        templateUrl: 'views/flot.html',
        controller: 'DashboardCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);
