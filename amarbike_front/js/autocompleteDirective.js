(function() {
	'use strict';
	
	var amarBikeApp = angular.module('amarBike'); 

	amarBikeApp.factory('autoCompleteDataService', [function() {
		return {
	    	getSource: function() {
	    		console.log("Debug");
	        	//this is where you'd set up your source... could be an external source, I suppose. 'something.php'
	        	return ['Mirpur', 'Dhanmondi', 'Gulshan', 'Banani', 'Baridhara', 'Banashri'];
	    	}
		}
	}]);

	amarBikeApp.directive('autoComplete', function(autoCompleteDataService) {
	    return {
	        restrict: 'A',
	        link: function(scope, elem, attr, ctrl) {
	            elem.autocomplete({
	                source: autoCompleteDataService.getSource(), //from your service
	                select: function( event, ui ) {
	                    scope.nRoute.source = ui.item.label;
	                    scope.$apply(function(){
						    scope.nRoute.source= ui.item.label;
						});
					},
	                change:function (event, ui) {
	                    if (ui.item === null) {
	                        scope.nRoute.source= null;
	                    }
	                },
	                minLength: 2
	            });
	        }
	    };
	});

}()); 