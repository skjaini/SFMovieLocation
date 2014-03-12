'use strict';

/* Controllers */

/* 
 * Contains the business logic for the mapview
 * utilizing the service via dependency injection.
 */
angular.module('film.controllers', []).
  controller('MapCtrl', ['$scope', '$http', 'initService', function($scope, $http, initService) {

    // Initiaize scope object
    $scope.movieName = initService.getMovieName();
    $scope.noLocationsMsg = "";
    $scope.myMarkers = [];

    // Fetch the list of movie titles
	$http.get('http://localhost\:3000/movienames').then(function(res){
		// console.log(res.data);
		 $scope.movies = res.data;
	});
    
    // Set the map view to San Francisco
    var ll = new google.maps.LatLng(37.7749295, -122.41941550000001);
    $scope.mapOptions = {
		center: ll,
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    // Geocoder to fetch the lat/long for given address
    var geocoder = new google.maps.Geocoder();
    
    // Marker info window
    var infowindow = new google.maps.InfoWindow({
            content: "loading..."
    });

    // Clear the markers
    $scope.clearOverlays = function() {
		if ($scope.myMarkers) {
		    for (var i in $scope.myMarkers) {
				$scope.myMarkers[i].setMap(null);
		    }
		}
        $scope.myMarkers = [];
    };
    
    $scope.findLocations = function() {

			// Reset the map
			$scope.clearOverlays();

    		// Fetch the location the movie was shot
			$http.get('http://localhost\:3000/movies/'+$scope.movieName).then(function(res){
				var queryResults = res.data;

				// Loop through the list of locations
				if (queryResults.length > 0) {

				    // Reset the messaging
				    $scope.noLocationsMsg = initService.getMessage('true');
					for (var i = 0; i < queryResults.length; i++) {
						var object = queryResults[i];
						var streetAddress = object['locations'];
						geocoder.geocode({'address': streetAddress + ',San Francisco,CA'}, function(results, status) {

						    if (status == google.maps.GeocoderStatus.OK) {

								// Create the marker
								var marker = new google.maps.Marker({
								    map: $scope.myMap,
								    position: results[0].geometry.location,
								    html: results[0].formatted_address
								});

								// Add onClick listener for info window
								google.maps.event.addListener(marker, "click", function() {
								    infowindow.setContent(this.html);
								    infowindow.open($scope.myMap, this);
								});

								// Add to markers list
								$scope.myMarkers.push(marker);
						    }
						    else {
								// TODO: Catch any geocoding errors
								console.log("Error geocoding");
						    }
						});
					}
				} else {
			 	   	// Display appropriate message if no location was found
			    	$scope.noLocationsMsg = initService.getMessage('false');
				}
			});
    }

  }]);