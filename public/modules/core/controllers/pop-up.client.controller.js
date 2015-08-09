// 'use strict';

// angular.module('core').controller('PopUpController', ['$scope',
// 	function($scope) {
// 		// Pop up controller logic
// 		// ...
// 	}
// ]);


'use strict';


angular.module('core').controller('PopUpController', ['$scope', 'Authentication', '$http', '$mdDialog',
    function($scope, Authentication, $http, $mdDialog) {
        // This provides Authentication context.
       
         $scope.authentication = Authentication;
        

 		



        $scope.task = {
            user : $scope.authentication.user._id,
            userEmail : $scope.authentication.user.email
        };


        /**
         * Hide or Show the 'left' sideNav area
         */




       

        // $scope.showAdvanced = function(ev) {
        //     $mdDialog.show({
        //        // controller: HomeController,
        //         templateUrl: 'dialog1.tmpl.html',
        //         parent: angular.element(document.body),
        //         targetEvent: ev,
        //     })
        //     .then(function(answer) {
        //         $scope.alert = 'You said the information was "' + answer + '".';
        //     }, function() {
        //         $scope.alert = 'You cancelled the dialog.';
        //     });
        // };
        

        $scope.hide = function() {
            console.log('hide callded');
            $mdDialog.hide();
        };

        $scope.cancel = function() {
             $mdDialog.hide();
        };

        $scope.postTaskData = function(){
            $http.post('/tasks', $scope.task).success(function(response) {
                console.log('in succ');
                console.log(response);
            }).error(function(response) {
                $scope.error = response.message;
            });
        };


        // $scope.getAllTask = function(){
        //     $http.get('/tasks', $scope.task).success(function(response) {
        //         console.log('in succ');
        //         console.log(response);
        //     }).error(function(response) {
        //         $scope.error = response.message;
        //     });
        // }();


        $scope.addTask = function(){
            console.log($scope.task.priority);
            if( $scope.task.priority === undefined){
                $scope.task.priority = 5;
            }
            console.log($scope.task);
            $scope.postTaskData();
            $mdDialog.hide();
        };

    
        
    }
]);