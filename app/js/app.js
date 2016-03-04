angular.module('myApp', ['lumx', 'ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
            templateUrl : 'views/home.html'
        }).when('/bands/:band', {
            templateUrl : 'views/band.html',
            controller : 'bandsController'
        }).when('/calendar', {
            templateUrl : 'views/calendar.html'
        }).when('/media', {
            templateUrl : 'views/media.html'
        }).when('/boosters', {
            templateUrl : 'views/boosters.html'
        }).when('/contact', {
            templateUrl : 'views/contact.html'
        }).when('/director', {
            templateUrl : 'views/director.html'
        }).when('/fundraiser', {
            templateUrl : 'views/fundraiser.html',
            controller : 'fundraiserController'
        });
	}]);