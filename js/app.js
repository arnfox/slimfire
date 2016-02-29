'use strict';

/* App Module */

var slimfireApp = angular.module('slimfireApp', [
  'ui.router',
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
  function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.
      otherwise('/pages/dashboard');
	
    $stateProvider.
	  state('page', {
		url: '/pages/:id',
		views: {
			'@': {templateUrl: 'views/layouts/page.html', controller: 'PagesCtrl'},
			'nav@page': {templateUrl: 'views/partials/nav.html', controller: 'PagesCtrl'},
			'body@page': {templateUrl: function($stateParams){return 'views/pages/' + $stateParams.id + '.html'}}
		},
		controller: 'PagesCtrl'
		// resolve: {
			// 'authData': ['Auth', function(Auth){
				// return Auth.$requireAuth()
			// }]	
		// }
      }).
	  state('/login', {
		templateUrl: 'login.html',
		controller: 'PagesCtrl',
		resolve: {
			'authData': ['Auth', function(Auth){
				return Auth.$waitForAuth()
			}]	
		}
      })
  });
  
slimfireApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
