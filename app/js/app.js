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
        }).when('/boosters', {
            templateUrl : 'views/boosters1.html'
        }).when('/contact', {
            templateUrl : 'views/contact1.html'
        }).when('/director', {
            templateUrl : 'views/director1.html'
        }).when('/fundraiser', {
            templateUrl : 'views/fundraiser1.html',
            controller : 'fundraiserController'
        });
	}]);