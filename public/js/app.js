'use strict';

// Declare app level module which depends on filters, and services
angular.module('film', ['ui.bootstrap', 'ui.map', 'ui.event', 'film.services', 'film.controllers'])
    .config(function($routeProvider) {
		$routeProvider.
			// Configure the template and controller for the respective routes.
			// Opportunity to perform A/B optimization testing.
			when('/mapview', {templateUrl: 'views/mapview.html', controller: 'MapCtrl'}).
			
			otherwise({redirectTo:'/mapview'});
    });