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
	'$mdSidenav', '$log', '$mdDialog',
    function($scope, Authentication, $http, $location, $mdSidenav, $log, $mdDialog) {
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
        



        $scope.task = {
            user : $scope.authentication.user._id,
            userEmail : $scope.authentication.user.email
        };


        /**
         * Hide or Show the 'left' sideNav area
         */




        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }


        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
               // controller: HomeController,
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
        

        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.postTaskData = function(){
            $http.post('/tasks', $scope.task).success(function(response) {
                console.log('in succ');
                console.log(response);
            }).error(function(response) {
                $scope.error = response.message;
            });
        }


        $scope.addTask = function(){
            console.log($scope.task.priority);
            if( $scope.task.priority === undefined){
                $scope.task.priority = 5;
            }
            console.log($scope.task);
           // $scope.postTaskData();
            $mdDialog.hide();
        }

        
        var toolBarHeight = $('.main-toolbar').parent().height();
        var tabHeaderHeight = $('md-tabs-wrapper').height();
        var documentHeight = $(document).height();
        var contentHeight = documentHeight - (tabHeaderHeight + toolBarHeight);
        $('md-tab-content').css('height',contentHeight+'px');
 
        var self = this;
        self.selected     = null;
        self.toggleList   = toggleUsersList;
        
    }
]);