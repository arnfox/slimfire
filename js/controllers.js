'use strict';

/* Controllers */

var slimfireControllers = angular.module('slimfireControllers', ['firebase']);

slimfireControllers.controller('PagesCtrl', 
	function(FB, $scope, $firebaseArray) {
		$scope.exp = {}
		
		var FBExpenses = FB.child('ss-expenses')
		
		$scope.expenses = $firebaseArray(FBExpenses)
			
		$scope.addExpense = function(){
			console.log($scope.exp)
			$scope.expenses.$add($scope.exp)
			$scope.exp = {}
		}
	});
