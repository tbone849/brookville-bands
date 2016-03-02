angular.module('myApp', ['lumx'])
	.controller('hello', ['$scope', function($scope){
		$scope.name = 'Tim';
	}]);