'use strict';


angular.module('core').controller('PopUpController', ['$scope', 'Authentication', '$http', '$mdDialog', 'Taskservice', 
    function($scope, Authentication, $http, $mdDialog, Taskservice) {
        // This provides Authentication context.
       
         $scope.authentication = Authentication;
        

 		



        $scope.task = {
            user : $scope.authentication.user._id,
            userEmail : $scope.authentication.user.email
        };


        $scope.hide = function() {
            console.log('hide callded');
            $mdDialog.hide();
        };

        $scope.cancel = function() {
             $mdDialog.hide();
        };

        $scope.postTaskData = function(){
            $http.post('/tasks', $scope.task).success(function(response) {
                Taskservice.setAllTasksObject($scope.task);
            }).error(function(response) {
                $scope.error = response.message;
            });
        };


        $scope.addTask = function(){
            console.log($scope.task.priority);
            if( $scope.task.priority === undefined){
                $scope.task.priority = 5;

            }

            $scope.task.description = $scope.task.description.replace(/\n/g, '<br/>');
            console.log($scope.task);
            $scope.postTaskData();
            $mdDialog.hide();
        };

    
        
    }
]);