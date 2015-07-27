'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', '$mdThemingProvider', '$mdIconProvider',
	function($locationProvider, $mdThemingProvider, $mdIconProvider) {
		 
		$locationProvider.hashPrefix('!');

		$mdThemingProvider.theme('default')
    	.primaryPalette('green',{
			'default': 'A700', // by default use shade 400 from the pink palette for primary intentions
			'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
			'hue-2': 'A400', // use shade 600 for the <code>md-hue-2</code> class
			'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
		})
    	.accentPalette('deep-orange',{
			'default': 'A700', // by default use shade 400 from the pink palette for primary intentions
			'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
			'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
			'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
		});

		$mdIconProvider     .iconSet("avatar", 'http://s3-us-west-2.amazonaws.com/s.cdpn.io/181892/avatars.svg', 128)
  
            .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon('menu'       , './assets/svg/menu.svg'        , 24)
            .icon('share'      , './assets/svg/share.svg'       , 24)
            .icon('google_plus', './assets/svg/google_plus.svg' , 512)
            .icon('hangouts'   , './assets/svg/hangouts.svg'    , 512)
            .icon('twitter'    , './assets/svg/twitter.svg'     , 512)
            .icon('phone'      , './assets/svg/phone.svg'       , 512);
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});