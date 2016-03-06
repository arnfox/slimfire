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
		  controller: 'indexCtrl'
	  }).
	  state('index.page', {
		url: '/pages/:id',
		views: {
			'nav': {
				templateUrl: 'views/partials/nav.html', 
				controller: function($ocLazyLoad, $scope){
					$scope.$on('$viewContentLoaded', function(){
						$ocLazyLoad.load('bower_components/metisMenu/dist/metisMenu.min.js')
						$ocLazyLoad.load({
							cache: false,
							files: [
								'dist/js/sb-admin-2.js'
						]})
					})
				}
			},
			'body': {
				templateUrl: function($stateParams){return 'views/pages/' + $stateParams.id + '.html'},
				controller: 'bodyCtrl'
			}
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

slimfireApp.directive('ngConfirmClick', [
  function(){
    return {
      priority: -1,
      restrict: 'A',
      link: function(scope, element, attrs){
        element.bind('click', function(e){
          var message = attrs.ngConfirmClick;
          if(message && !confirm(message)){
            e.stopImmediatePropagation();
            e.preventDefault();
          }
        });
      }
    }
  }
]);