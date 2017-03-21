(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function() {
		return {
			link: function(scope, element, attrs) {
				console.log('orsStar link', arguments);
				var html = '';
				for (var i = 0; i < 3; i++) {
					html += '<img src="./ors-star/img/yellow_star.png" />';
				}

				for (var i = 3; i < 5; i++) {
					html += '<img src="./ors-star/img/white_star.png" />';
				}
				element.html(html);

			}
		};
	});

})();
