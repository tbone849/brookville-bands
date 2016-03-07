angular.module('myApp')
	.controller('fundraiserController', ['$scope', function($scope){
		$scope.fundraisers = [
			// {	
			// 	name: 'Pie and Stromboli Sale',
			// 	details : [
			// 		{ item: 'Start Date', subitem: 'February 15, 2016'},
			// 		{ item: 'End Date', subitem: 'February 29, 2016'},
			// 		{ item: 'Forms Due', subitem: 'March 4, 2016'},
			// 		{ item: 'Pick Up', subitem: 'Wednesday, March 16, 2016'},
			// 		{ item: 'Place', subitem: 'High School Cafeteria'},
			// 		{ item: 'Time', subitem: '3:30pm - 4:30pm'}
			// 	],
			// 	docs: [
			// 		{ 
			// 			name: 'Info Sheet',
			// 			url: './documents/pie-stromboli-info.pdf',
			// 			about: '(PDF 182kb)'
			// 		},
			// 		{
			// 			name: 'Pie Order Form',
			// 			url: './documents/pie order form.pdf',
			// 			about: '(PDF 509kb)'
			// 		},
			// 		{
			// 			name: 'Stromboli Order Form',
			// 			url: './documents/stromboli order form.pdf',
			// 			about: '(PDF 328kb)'
			// 		}
			// 	]
			// }	
			{
				name: 'Tag Days',
				details: [
					{ item: 'Start Date', subitem: 'Saturday, April 16, 2016'},
					{ item: 'Info', subitem: 'More to come...'}
				]
			}
		];
		
	}]);