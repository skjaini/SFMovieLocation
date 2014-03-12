'use strict';

/* Services */

/* Register the services for the app for
 * common/init service methods.
 */
angular.module('film.services', []).
  service('initService', function() {

	    // Initialize and provide getters
	    var movieName = "180";
	    var noLocationMsg = " was actually not filmed in SF!";
	    
	    this.getMovieName = function() {
			return movieName;
	    }
	    
	    this.getMessage = function(locationFound) {
			return (locationFound == 'true') ? '' : noLocationMsg;
	    }
});