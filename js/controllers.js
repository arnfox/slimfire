'use strict';

/* Controllers */

var slimfireControllers = angular.module('slimfireControllers', ['firebase', 'ui.router']);

slimfireControllers.controller('indexCtrl', 
	function(Auth, $location, $scope) {
		$scope.Logout = function(){
			Auth.$unauth()
			$location.path("/login")
		}
	}
);

slimfireControllers.controller('bodyCtrl', 
	function(FB, $scope, $firebaseArray, $location, $state) {
		$scope.$on('$destroy', function() {
        	$scope.db.$destroy()
    	});
		var FBModel = FB.child($state.params.id)
		$scope.db = $firebaseArray(FBModel)
		$scope.row = {}
		$scope.db.Add = function(){
			$scope.db.$add($scope.row)
			$scope.row = {}
		}
	}
);

slimfireControllers.controller('loginCtrl', 
	function($scope, Auth, $location) {
		
		$scope.user = {}
		
		$scope.Login = function(){
			Auth.$authWithPassword({
				email: $scope.user.email,
				password: $scope.user.password
			})
			.then(function(authData){
				$location.path("/pages/dashboard")
			})
			.catch(function(){
				console.error("Error trying to authenticate user " + $scope.user.email)
			})
		}
	}
);