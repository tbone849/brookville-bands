angular.module('myApp')
	.controller('mainController', ['$location', '$scope', function($location, $scope){
		$scope.navigateTo = function(newPath){
			$location.path(newPath);
		};
	}]);