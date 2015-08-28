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


angular.module('core').controller('HomeController', ['$scope', 'Authentication',  '$http', '$location', 'Taskservice', 
	'$mdSidenav', '$log', '$mdDialog', '$compile',
    function($scope, Authentication, $http, $location, Taskservice, $mdSidenav, $log, $mdDialog, $compile) {
        
        $scope.authentication = Authentication;
       
        //console.log(Authentication.user._id);
 		if(!(Authentication.user)){
            console.log($location);
        	$location.path('/signin');
        }
        
        $scope.initializeMasonry = function() {
           // console.log("efwfwfwfwf");
           //$timeout(function(){
            //    angular.element('.tabs-container').masonry({
            //     itemSelector: '.task-card',
            //     isAnimated: true
            //     //columnWidth: 200
            // }); 
            //}, 500);  

            var elem = document.querySelector('.task-card-grids');
            var msnry = new Masonry( elem, {
              // options
              itemSelector: '.task-card',
              isAnimated: true
              //columnWidth: 200
            });
            $compile( angular.element('.task-card-element .action-buttons'))($scope);

        };
        

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

       
        $scope.allTasks = [];
        $scope.getAllTask = function(){  
            Taskservice.getAllTask($scope.authentication.user._id).success(function(response) {
                $scope.allTasks = response;
                Taskservice.getAllTasksObject = response;

                $scope.allTasks = Taskservice.getAllTasksObject;   
                console.log(Taskservice.getAllTasksObject);
            }).error(function(response) {
                $scope.error = response.message;
            });
            
        };

        $scope.getAllTask();
        

        $scope.editThisTask = function(htmlObject){
            console.log(htmlObject);
            var currentTaskCard = angular.element(htmlObject).parents('.task-card-element');
            console.log(currentTaskCard);
            angular.element('.task-title, .task-description',currentTaskCard).addClass('contenteditable').prop('contenteditable',true);
        };

        $scope.deleteThisTask = function(htmlObject){
            console.log('delete called');
        };

        var self = this;
        self.selected     = null;
        //self.toggleList   = toggleUsersList;
        
    }
]);