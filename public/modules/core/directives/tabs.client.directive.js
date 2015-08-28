'use strict';

angular.module('core').directive('tabs', [
	function() {
		return {
			//template: '<div></div>',
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				// Tabs directive logic
				// ...

				
				setTimeout(function(){
					var toolBarHeight = document.getElementById('app-top-header').offsetHeight;
				    var tabHeaderHeight = document.querySelector('md-tabs-wrapper').offsetHeight;
				    var documentHeight = document.documentElement.clientHeight;
				    var contentHeight = documentHeight - (tabHeaderHeight + toolBarHeight);
				    angular.element('md-content.outer-contents').css('height',contentHeight+'px');
			    	angular.element('md-content.outer-contents').niceScroll();
				}, 1000);
				

				// var toolBarHeight = angular.element('#app-top-header').height();
			 //    var tabHeaderHeight = angular.element('tab-header').offsetHeight;
			 //    var documentHeight = document.documentElement.clientHeight;
			 //    var contentHeight = documentHeight - (tabHeaderHeight + toolBarHeight);
			  //  console.log(toolBarHeight +" ====" +tabHeaderHeight+" ====" +documentHeight +" ====" +contentHeight);
			    
			}
		};
	}
]);



// $scope.setCustomCss = function(){
    
//     //document.querySelector('md-tab-content').style.height = contentHeight+'px'
//     angular.element('md-tab-content').ready(function () {
//         console.log(angular.element('.tabs-content ng-scope').length);
        
//     });
    
// };


// $scope.$evalAsync(function () {//I change here
//      $scope.setCustomCss();
// });
