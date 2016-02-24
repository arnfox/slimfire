'use strict';

/* App Module */

var slimfireApp = angular.module('slimfireApp', [
  'ngRoute',
  'slimfireControllers'
  //'slimfireServices'
]);

slimfireApp.config( 
  function($routeProvider) {
    $routeProvider.
      when('/app/:page', {
        templateUrl: function(params){return 'views/' + params.page + '.html'},
		controller: 'PagesCtrl'
      }).
      otherwise({
        redirectTo: '/app/dashboard'
      });
  });
