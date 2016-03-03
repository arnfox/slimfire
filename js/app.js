'use strict';

/* App Module */

var slimfireApp = angular.module('slimfireApp', [
  'ui.router',
  'oc.lazyLoad',
  'slimfireServices',
  'slimfireControllers'
]);

slimfireApp.run(function($rootScope, $state){
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
		if(error === "AUTH_REQUIRED"){
			$state.go("login")
		}
	})
})

slimfireApp.config( 
  function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
	
	$urlRouterProvider.
      otherwise('/pages/dashboard');
	
    $stateProvider.
	  state('index', {
		  abstract: true,
		  templateUrl: 'views/layouts/page.html',
		  controller: 'PagesCtrl'
	  }).
	  state('index.page', {
		url: '/pages/:id',
		views: {
			'nav': {
				templateUrl: 'views/partials/nav.html', 
				controller: function($ocLazyLoad){
					$ocLazyLoad.load('dist/js/sb-admin-2.js')
				}
			},
			'body': {templateUrl: function($stateParams){return 'views/pages/' + $stateParams.id + '.html'}}
		},
		resolve: {
			'authData': ['Auth', function(Auth){
				return Auth.$requireAuth()
			}]	
		}
      }).
	  state('login', {
		url: "/login",
		templateUrl: 'views/layouts/login.html',
		controller: 'loginCtrl',
		resolve: {
			'authData': ['Auth', function(Auth){
				return Auth.$waitForAuth()
			}]	
		}
      })
  });
  
slimfireApp.filter('reverse', function() {
  return function(items) {
	return Object.prototype.toString.call( items ) === '[object Array]' ? items.slice().reverse() : items
  };
});
