'use strict';

/* Controllers */

var fbRef = new Firebase("https://slimfire.firebaseio.com")

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
		var FBModel = fbRef.child($state.params.id)
		$scope.db = FB(FBModel)
		$scope.row = {date:new Date()}
		$scope.db.Save = function(){
			$scope.row.$id ? $scope.db.$save($scope.row) : $scope.db.$add($scope.row)
			$scope.row = {date:new Date()}
		}

		$scope.FBEdit = function(model){
			$scope.row = model
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