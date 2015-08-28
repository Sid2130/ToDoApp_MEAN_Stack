'use strict';

angular.module('core').factory('Taskservice', [ '$http',
	function($http) {
		// Taskservice service logic
		// ...

		// Public API

		var _this = this;
		_this.getAllTasksObject = [];

		_this.setAllTasksObject = function(obj){
			_this.getAllTasksObject.push(obj);
			return _this.getAllTasksObject;
		};

		
		_this.getAllTask = function(userid){

			// if( _this.allTasksObject === ''){

			// 	$http.get('/tasks/'+userid).success(function(response) {
	  //               console.log('in succ');
	  //               console.log(response);
	  //               _this.allTasksObject = response;
	  //               return _this.allTasksObject;
	  //           }).error(function(response) {
	  //               _this.error  = response.message;
	  //           });
			// }
			// else{
			// 	return _this.allTasksObject;
			// }

			return $http.get('/tasks/'+userid);
			
		};
		return _this;
		
	}
]);