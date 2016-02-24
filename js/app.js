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
  
slimfireApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
