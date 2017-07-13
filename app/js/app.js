angular.module('myApp', ['lumx', 'ngRoute', 'smoothScroll'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
            templateUrl : 'views/home.html'
        }).when('/bands/:band', {
            templateUrl : 'views/band.html',
            controller : 'bandsController'
        }).when('/calendar', {
            templateUrl : 'views/calendar1.html'
        }).when('/media', {
            templateUrl : 'views/media1.html'
        }).when('/contact', {
            templateUrl : 'views/contact1.html'
        }).when('/directors', {
            templateUrl : 'views/director1.html'
        }).when('/student_parent_info', {
            templateUrl : 'views/student_parent_info.html',
        });
	}]);