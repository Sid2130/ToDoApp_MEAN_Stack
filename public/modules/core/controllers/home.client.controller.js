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
        
        $scope.authentication = Authentication;
 		if(!(Authentication.user)){
            console.log($location);
        	$location.path('/signin');
        }
        

        

        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
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

       
        $scope.allTasks = '';
        $scope.getAllTask = function(){
            $http.get('/tasks', $scope.task).success(function(response) {
                console.log('in succ');
                console.log(response);
                $scope.allTasks = response;
            }).error(function(response) {
                $scope.error = response.message;
            });
        };
        $scope.getAllTask();
        
   

        var self = this;
        self.selected     = null;
        //self.toggleList   = toggleUsersList;
        
    }
]);