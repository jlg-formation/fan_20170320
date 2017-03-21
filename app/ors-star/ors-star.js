(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function() {
		return {
			link: function(scope, element, attrs) {
				console.log('orsStar link', arguments);
				var html = '';
				var note = 4;
				for (let i = 0; i < note; i++) {
					html += '<img src="./ors-star/img/yellow_star.png" />';
				}

				for (let i = note; i < 5; i++) {
					html += '<img src="./ors-star/img/white_star.png" />';
				}
				element.html(html);

			}
		};
	});

})();
