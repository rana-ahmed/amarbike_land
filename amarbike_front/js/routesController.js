 (function() { 
	'use strict'; 

	var amarBikeApp = angular.module('amarBike', []);

	 //RouteListController.$inject = ["$scope"];

	function RouteListController($scope, httpService) {

		var onGettingRouteList = function(data) {
			$scope.routes = data;
		};

		var onError = function(data){
			$scope.error = data;
		};


		var onVoteCount = function(data) {
			if ($scope.voteIndex == 0) {
				$scope.button_clicked = true;
				$scope.voteCountOne = data;
			} else if ($scope.voteIndex == 1) {
				$scope.voteCountTwo = data;
				$scope.button_clickedTwo = true;
			}
		};


		var getVoteError = function() {
			console.log("Get Vote Error");
		};

		var onGettingVoteCountOne = function(data) {
			$scope.voteCountOne = data;
		};

		var onGettingVoteCountTwo = function(data) {
			$scope.voteCountTwo = data;
		};

		var countError = function() {
			console.log("Vote count Error");
		};


		$scope.voteUp = function(param) {
			$scope.voteIndex = parseInt(param);
			var route_Id = {"route_id" : $scope.voteIndex};
			httpService.voteCount("http://localhost:8000/api/v1/vote", route_Id)
					   .then(onVoteCount, countError)
			
		};

		httpService.getRouteList("./routes.json").
			then(onGettingRouteList, onError);

		httpService.getVoteCount("http://localhost:8000/api/v1/vote/0").
			then(onGettingVoteCountOne, getVoteError);

		httpService.getVoteCount("http://localhost:8000/api/v1/vote/1").
			then(onGettingVoteCountTwo, getVoteError);

	}
	
	amarBikeApp.controller('RouteListController', ['$scope', 'httpService', RouteListController]);
}());
       
