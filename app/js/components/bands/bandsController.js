angular.module('myApp')
	.controller('bandsController', ['$routeParams', '$scope', 'titlecase', function($routeParams, $scope, titlecase){
		$scope.header = titlecase($routeParams.band, '_');
	}]);