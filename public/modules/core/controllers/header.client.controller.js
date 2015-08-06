'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$mdSidenav', '$mdGridLayout',
	function($scope, Authentication, Menus, $mdSidenav, $mdGridLayout) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		

  		$scope.taskUser = $scope.authentication.user._id;
        $scope.taskUserEmail = $scope.authentication.user.email;

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

		
		$scope.signout = function(){
			$location.path('/auth/signout');
		};

		$scope.toggleUsersList =function() {
            $mdSidenav('left').toggle();
        };
    	
	}
]);
