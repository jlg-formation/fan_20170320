(function() {
	'use strict';

	var app = angular.module('ors-route');

	app.controller('ProductCtrl', ['$injector', function($injector) {
		var ctrl = this;
		var $q = $injector.get('$q');
		var $http = $injector.get('$http');

		ctrl.start = function() {
			console.log('Product ctrl Start', arguments);

			$http.get('../ws/s1').then(function(response) {
				console.log('response', response);
			}).catch(function(error) {
				console.error('error', error);
			});
		};
	}]);


})();
