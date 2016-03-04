angular.module('myApp')
	.controller('bandsController', ['$routeParams', '$scope', 'titlecase', function($routeParams, $scope, titlecase){
		$scope.header = titlecase($routeParams.band, '_');

		$scope.pic = '../assets/img/' + $routeParams.band + '.png';

		if($routeParams.band === 'jr_high'){
			$scope.text = [
				'The Brookville Jr. High Band is open to all 7th and 8th grade students who study a wind or percussion instrument.  The Jr. High Concert Band actively performs throughout the year including the annual Holiday and spring concerts.',
				'The band also participates, annually, in the Pennsylvania Music Educators Association (PMEA) Music Performance Assessments (MPA).  This is a state rating system that assesses the quality of large music ensembles.  The Jr. High Band has consistently received Superior ratings at this event.'
			];
		} else if($routeParams.band === 'sr_high'){
			$scope.text = [
				'The Brookville Sr. High Band is open to all students in grades 9-12 who study a wind or percussion instrument.  Sr. High ensembles include the Concert Band, Marching Band, and Jazz Band.  The Sr. High Concert Band actively performs throughout the year including the annual Holiday and spring concerts, as well as the annual Veteran’s Day and Memorial Day programs held in Brookville.',
				'The band also participates, annually, in the Pennsylvania Music Educators Association (PMEA) Music Performance Assessments (MPA).  This is a state rating system that assesses the quality of large music ensembles.  The Sr. High Band has consistently received Superior ratings at this event.'
			];
		} else if($routeParams.band === 'marching_band'){
			$scope.text = [
				"The Brookville Raider Marching Band is composed of students in 9th-12th grade. The marching band is active throughout the year performing at football games, Laurel Festival Parade, Fireman's Parade, Autumn Leaf Festival Parade, and the Brookville Halloween Parade."
			];
		}
	}]);