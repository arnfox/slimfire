'use strict';

/* Controllers */

var slimfireControllers = angular.module('slimfireControllers', ['firebase']);

slimfireControllers.controller('PagesCtrl', 
	function(FB, Auth, $scope, $firebaseArray, $location) {
		
		$scope.Logout = function(){
			Auth.$unauth()
			$scope.expenses.$destroy()
			$location.path("/login")
		}
		
		// --- SS EXpense --
		$scope.exp = {}
		
		var FBExpenses = FB.child('ss-expenses')
		
		$scope.expenses = $firebaseArray(FBExpenses)
			
		$scope.addExpense = function(){
			$scope.expenses.$add($scope.exp)
			$scope.exp = {}
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
				console.log("Logged user: " + authData.uid)
				$location.path("/pages/dashboard")
			})
			.catch(function(){
				console.error("Error trying to authenticate user " + $scope.user.email)
			})
		}
	}
);