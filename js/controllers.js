'use strict';

/* Controllers */

var slimfireControllers = angular.module('slimfireControllers', []);

//slimfireControllers.controller('PagesCtrl', ['FB', 'authData', '$scope', 
slimfireControllers.controller('PagesCtrl', ['FB', '$scope', 
	function(FB, authData, $scope) {
		
		console.log('authData')
		//console.log(authData)
		
		// $scope.expenses = FB['ss-expenses']
		
		// $scope.addExpense = function(){
			// $scope.expenses.$add($scope.exp)
			// $scope.exp = {}
		// }
	}]);
