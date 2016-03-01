'use strict';

/* Controllers */

var slimfireControllers = angular.module('slimfireControllers', []);

//slimfireControllers.controller('PagesCtrl', ['FB', 'authData', '$scope', 
slimfireControllers.controller('PagesCtrl', 
	function(FB, $scope) {
		
		//$ocLazyLoad.load('../dist/js/sb-admin-2.js')
		
		//$scope.$on('$viewContentLoaded', SBMenu)
		
		console.log('authData')
		//console.log(authData)
		
		// $scope.expenses = FB['ss-expenses']
		
		// $scope.addExpense = function(){
			// $scope.expenses.$add($scope.exp)
			// $scope.exp = {}
		// }
	});
