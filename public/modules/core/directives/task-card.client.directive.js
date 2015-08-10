'use strict';

angular.module('core').directive('taskCard', [
	function() {
		return {
			//template: '<div></div>',
			restrict: 'A',
			transclude: true,
			scope:{
				taskData: '='
			},
			//templateUrl: '../views/taskCard.html',
			templateUrl: 'modules/core/directives/templates/taskCard.html',
			link: function postLink(scope, element, attrs) {
				// Task card directive logic
				// ...

				
			}
		};
	}
]);

angular.module('core').directive("onFinishRender", function($timeout){
	return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                scope.$evalAsync(attr.onFinishRender);
            }
        }
    }
});