angular.module('myApp')
	.controller('bandsController', ['$routeParams', '$scope', 'titlecase', function($routeParams, $scope, titlecase){

		if($routeParams.band === 'jr_high_concert_band'){
			$scope.text = [
				'The Brookville Jr. High Band is open to all 7th and 8th grade students who study a wind or percussion instrument.  The Jr. High Concert Band actively performs throughout the year including the annual Holiday and spring concerts.',
				'The band also participates, annually, in the Pennsylvania Music Educators Association (PMEA) Music Performance Assessments (MPA).  This is a state rating system that assesses the quality of large music ensembles.  The Jr. High Band has consistently received Superior ratings at this event.'
			];
			$scope.header = 'Jr. High Concert Band';
			$scope.pic = './assets/img/jr_high.png';
		} else if($routeParams.band === 'sr_high_concert_band'){
			$scope.text = [
				'The Brookville Sr. High Band is open to all students in grades 9-12 who study a wind or percussion instrument.  Sr. High ensembles include the Concert Band, Marching Band, and Jazz Band.  The Sr. High Concert Band actively performs throughout the year including the annual Holiday and spring concerts, as well as the annual Veteran’s Day and Memorial Day programs held in Brookville.',
				'The band also participates, annually, in the Pennsylvania Music Educators Association (PMEA) Music Performance Assessments (MPA).  This is a state rating system that assesses the quality of large music ensembles.  The Sr. High Band has consistently received Superior ratings at this event.'
			];
			$scope.pic = './assets/img/sr_high.png';
			$scope.header = 'Sr. High Concert Band';
		} else if($routeParams.band === 'blue_raider_marching_band'){
			$scope.text = [
				"The Brookville Raider Marching Band is composed of students in 9th-12th grade. The marching band is active throughout the year performing at football games, Laurel Festival Parade, Fireman's Parade, Autumn Leaf Festival Parade, and the Brookville Halloween Parade."
			];
			$scope.pic = './assets/img/marching_band.png';
			$scope.header = 'Blue Raider Marching Band';
			$scope.dates = [
				'2017 Band Camp - August 7-10, 8:00am – 4:00pm'
			];
		} else if($routeParams.band === 'jazz_band'){
			$scope.text = [
				"The Brookville High School Jazz Band includes students in grades 9-12 and performs high quality jazz literature. The Jazz Band rehearses in the Spring and performs at the Spring Band Concert."
			];
			$scope.header = 'Jazz Band';
		} else if($routeParams.band === 'elementary_honors_band'){
			$scope.text = [
				"The Elementary Honors Band is a special group made up of 5th and 6th grade band students. Members are selected by audition during lessons in October.  Students that show good practice habits and playing skills are selected into the Honors Band.  The group rehearses several times during Thursday mornings before school in late October and in all of November. Extra music is learned by honors band students in addition to the other songs being learned in regular band. The honors band performs during a field trip to the Pinecreek and Northside elementary schools. This special event has become a tradition at Hickory Grove and the students all have fond memories of performances past."
			];
			$scope.header = 'Elementary Honors Band';
		} else if($routeParams.band === 'elementary_band'){
			$scope.text = [
				"The 4th grade band is also considered the beginning band group at Brookville area schools. Students are able to begin playing band instruments in 4th grade. All Band members have one group lesson per week. The entire group also gets to meet for one band rehearsal per week as well.  Students learn basic instrument technique during this first year and present a program for parents in May.",
				"In the 5th grade band, student develop many abilities in ensemble playing.  The music becomes more challenging and students strive to become better.  Even though the 5th grade band rehearses separately, the band will perform concerts as a combined 5th and 6th grade band.  Typically students in 5th grade will play lower parts in the music, i.e. - clarinet notes below the break and also brass players will play in their lower range.  The 5th and 6th grade band performs both Christmas and Spring concerts.",
				"The 6th grade band again combines with the 5th grade band students for the concerts. The band members are now in their third year of playing and have developed skills to propel them to the junior high band the following year.  As with any band group, the goal of the director is to prepare the students for the next level of playing. The 6th grade band members are also considered the leaders of the elementary bands at Hickory Grove elementary school. "
			];
			$scope.header = '4th, 5th, & 6th Grade Band';
		} else if($routeParams.band === 'elementary_jazz_band'){
			$scope.text = [
				"The Elementary Jazz Band is another special group at Hickory Grove.  Fifth and sixth grade students once again audition for the jazz band sometime in February during band lessons. The jazz band then begins to rehearse Thursday mornings in March to prepare selections for the upcoming concert in the spring. The jazz band uses a rhythm section instead of a percussion section to hold the group together. This new style is exciting and fun for the students to learn."
			];
			$scope.header = 'Elementary Jazz Band';
		}
	}]);