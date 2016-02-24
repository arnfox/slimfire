'use strict';

/* Controllers */

var slimfireControllers = angular.module('slimfireControllers', ['firebase']);

slimfireControllers.controller('PagesCtrl', ['$scope', '$firebaseArray', 
	function($scope, $firebaseArray) {
		var ref = new Firebase("https://slimfire.firebaseio.com/ss-expenses")
		
		$scope.expenses = $firebaseArray(ref)
		
		$scope.addExpense = function(){
			$scope.expenses.$add($scope.exp)
			$scope.exp = {}
		}
	}]);
