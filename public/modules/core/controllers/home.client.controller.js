'use strict';


// angular.module('core').controller('HomeController', ['$scope', '$http', '$location', 'Authentication', 'Menus',
// 	function($scope, $http, $location, Authentication, Menus) {
// 		// This provides Authentication context.
// 		$scope.authentication = Authentication;

// 		if(!(Authentication.user)){
//         	$location.path('/signin');
//         }
// 	}
// ]);


angular.module('core').controller('HomeController', ['$scope', 'Authentication',  '$http', '$location', 
	'$mdSidenav', '$mdBottomSheet', '$log', '$mdDialog',
    function($scope, Authentication, $http, $location, $mdSidenav, $mdBottomSheet, $log, $mdDialog) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
 
 		if(!(Authentication.user)){
 		// 	$scope.$apply(function() {
	  //       	$location.path('/signin');
		 //        console.log($location.path());
			// });
            console.log($location);
        	$location.path('/signin');
        }
        
        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }


        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
            })
            .then(function(answer) {
                $scope.alert = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.alert = 'You cancelled the dialog.';
            });
        };
        


        function DialogController($scope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
    
        var toolBarHeight = $('.main-toolbar').parent().height();
        var tabHeaderHeight = $('md-tabs-wrapper').height();
        var documentHeight = $(document).height();
        var contentHeight = documentHeight - (tabHeaderHeight + toolBarHeight);
        $('md-tab-content').css("height",contentHeight+"px");
 
        var self = this;
        self.selected     = null;
        self.toggleList   = toggleUsersList;
        
    }
]);