'use strict';

angular.module('core').directive('taskCard', ['$compile', '$parse',
	function($compile, $parse) {
		return {
			//template: '<div></div>',
			restrict: 'A',
			transclude: true,
			scope:{
				taskData: '='
			},
			//templateUrl: '../views/taskCard.html',
			templateUrl: 'modules/core/directives/templates/taskCard.html',
			link: function(scope, element, attrs) {
				// Task card directive logic
				// ...
				// scope.$watch(attrs.content, function() {
					// element.html($parse(attrs.content)(scope));
					//$compile(element.contents())(scope);
					//$compile( angular.element('.task-card-element'))(scope);
				// });
			}
		};
	}
]);

angular.module('core').directive('onFinishRender', function($timeout){
	return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                scope.$evalAsync(attr.onFinishRender);
            }
        }
    };
});