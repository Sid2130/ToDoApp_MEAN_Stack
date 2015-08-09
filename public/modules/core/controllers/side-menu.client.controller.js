'use strict';

angular.module('core').controller('SideMenuController', ['$scope', '$mdSidenav',
	function($scope, $mdSidenav) {
		// Side menu controller logic
		// ...
		function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        var self = this;
        //self.selected     = null;
        self.toggleList = toggleUsersList;
	}
]);