angular.module('myApp')
	.controller('mainController', ['$location', '$anchorScroll', '$scope', function($location, $anchorScroll, $scope){
		$scope.navigateTo = function(newPath){
			$location.path(newPath);
		};
		$scope.goToTop = function(){
			$location.hash('top');
			$anchorScroll();
		};
	}]);