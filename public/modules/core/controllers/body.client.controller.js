'use strict';

angular.module('core').controller('BodyController', ['$scope', '$http', '$location', 'Authentication', 'Menus',
    function($scope, $http, $location, Authentication, Menus) {
        if (Authentication.user){
        	$scope.topNavBar = true;
        }
        else{
        	$location.path('/signin');
        	$scope.topNavBar = false;
        }

        $scope.$on('updateMenuDisplayProperty',function(data){
	        $scope.topNavBar = data;
	    });
    }
]);


