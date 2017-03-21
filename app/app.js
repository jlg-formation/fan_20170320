(function() {
	'use strict';

	var app = angular.module('main', ['ors-route']);

	app.run(['$rootScope', '$location', function($rootScope, $location) {
		$rootScope.isActive = function(url) {
			var path = $location.path();
			console.log('path', path);
			return url === path;
		};
		console.log('run');
	}]);

	app.component('orsHeader', {
		templateUrl: 'tmpl/ors-header.html'
	});


	app.directive('orsBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-body.html'
		};
	});


	app.directive('orsFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-footer.html',
		};
	});

})();
