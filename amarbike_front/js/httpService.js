(function() {
	'use strict';  

    var amarBikeApp = angular.module('amarBike');

	var httpService = function($http) {

    	var getRouteList = function(url) {
    		return $http.get(url)
    					.then(function(response) {
    						return response.data;
    					});
    	};

    	var postSuggestion = function(url,dataObj) {
    		return $http.post(url, dataObj)
    					.then(function(response) {
    						return response.data;
    					});
    	};

        var voteCount = function(url, routeId) {
        	return $http.post(url, routeId)
                        .then(function(response) {
                            return response.data;
                        });
        };

        var getVoteCount = function(url) {
            return $http.get(url)
                        .then(function(response) {
                            return response.data;
                        });
        };

        

    	return{
            
    		getRouteList : getRouteList,
    		postSuggestion : postSuggestion,
            voteCount : voteCount,
            getVoteCount : getVoteCount,
            url : "http://localhost:3000/"
    	}

    };

    amarBikeApp.factory('httpService', httpService);
	
}());      
