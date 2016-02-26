'use strict';

/* App Module */

var slimfireApp = angular.module('slimfireApp', [
  'ngRoute',
  'slimfireServices',
  'slimfireControllers'
]);

slimfireApp.run(function($rootScope, $location){
	$rootScope.$on('$routeChangeError', function(event, next, previous, error){
		if(error === "AUTH_REQUIRED"){
			$location.path("/login")
		}
	})
})

slimfireApp.config( 
  function($routeProvider) {
    $routeProvider.
	  when('/login', {
		templateUrl: 'login.html',
		controller: 'PagesCtrl',
		resolve: {
			'authData': ['Auth', function(Auth){
				return Auth.$waitForAuth()
			}]	
		}
      }).
      when('/app/:page', {
        templateUrl: function(params){return 'views/' + params.page + '.html'},
		controller: 'PagesCtrl',
		resolve: {
			'authData': ['Auth', function(Auth){
				return Auth.$requireAuth()
			}]	
		}
      }).
      otherwise({
        redirectTo: '/login'
      });
  });
  
slimfireApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
