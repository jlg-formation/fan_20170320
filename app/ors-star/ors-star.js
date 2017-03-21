(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function() {
		return {
			scope: {
				n: '=note',
			},
			link: function(scope, element, attrs) {
				console.log('orsStar link', arguments);
				scope.$watch('n', function() {
					var html = '';
					var note = 4;
					note = (scope.n === undefined) ? note : scope.n;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					for (let i = 0; i < note; i++) {
						html += '<img src="./ors-star/img/yellow_star.png" />';
					}

					for (let i = note; i < 5; i++) {
						html += '<img src="./ors-star/img/white_star.png" />';
					}
					element.html(html);
				});


			}
		};
	});

})();
