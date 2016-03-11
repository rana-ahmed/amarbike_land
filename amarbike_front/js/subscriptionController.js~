(function() {
	'use strict'; 

	var amarBikeApp = angular.module('amarBike');

	function SubscriptionController ($scope, httpService) {
		$scope.regPhone = /[0]\d{10}$/;
		$scope.regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

		function isPhoneNumber(pNumber) {
			return $scope.regPhone.test(pNumber);
		}

		function isEmail(email) {
			return $scope.regEmail.test(email);
		}

		var onResponse = function(data){
			$scope.responseMsg = data;
            $scope.user.phone = "";
            $scope.user.email = "";
		};

		var onError = function(err){
			$scope.error = err;
			console.log("Error");
		};
		
		$scope.isPhoneValid = function(phone){ 
			if (!isPhoneNumber(phone)) {
				$scope.signupForm.$invalid;
				swal("Problem", "Put your Number in correct form");
			};
		};

		$scope.isEmailValid = function(email) {
			if (!isEmail(email)) {
				$scope.signupForm.$invalid;
				swal("Problem", "Put your Email in correct form");
			};
		};

		$scope.goSubscribe = function(user){
			
			$scope.newUser = user;
			if ($scope.signupForm.$invalid) {
				swal("Problem", "Please check your phone and email.");
			}
			if($scope.signupForm.$valid){
				httpService.postSuggestion("http://localhost:8000/api/v1/subscriber",$scope.newUser).
	            	then(onResponse, onError);

            	swal("Subscription Complete :)");
            }
		};
	}


	amarBikeApp.controller('SubscriptionController', ['$scope', 'httpService', SubscriptionController]);
	
}());  
