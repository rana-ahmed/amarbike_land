(function() { 
	'use strict'; 
	 
	var amarBikeApp = angular.module('amarBike');


	var routes = [
	  {id:1, route:'Motijheel'},
	  {id:2, route:'Banani'},
	  {id:3, route:'Gulshan'},
	  {id:4, route:'Baridhra'},
	  {id:5, route:'Uttora'},
	  {id:6, route:'Mirpur',selected:true}
	];


	function SuggestRouteController ($scope, httpService) {

		$scope.routes_list = routes;

		var onResponse = function(data){
			$scope.responseMsg = data;
            console.log($scope.responseMsg);
            $scope.nRoute.source = "";
            $scope.nRoute.destination = "";
		};

		var onError = function(err){
			$scope.error = err;
			console.log("Error");
		};
		
		$scope.suggestRoute = function(nRoute){	
			$scope.newRoute = nRoute;			

            httpService.postSuggestion("http://localhost:8000/api/v1/suggestion",$scope.newRoute).
            	then(onResponse, onError);

            swal("ThanQ   :)");
		};
	}

	 amarBikeApp.controller('SuggestRouteController', ['$scope', 'httpService', SuggestRouteController]);

}());     
