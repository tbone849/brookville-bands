// Came from the comments here:  https://gist.github.com/maruf-nc/5625869
angular.module('myApp')
    .factory('titlecase', function() {
        return function (input, separator) {
        	input = input.toString();
            var split = input.split(separator);
            var titledStrings = split.map(function(word){
         		var splitWord = word.split('');
				splitWord[0] = splitWord[0].toUpperCase();
				return splitWord.join('');
            });
            return titledStrings.join(' ');
        };
});