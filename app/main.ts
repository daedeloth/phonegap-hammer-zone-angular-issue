import 'rxjs/Rx';
//import browsershims from 'airbnb-browser-shims';

import 'classlist-polyfill';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

function initApp(){

	bootstrapWrapper();

}
/**
 * bootstrap wrapper
 */
function bootstrapWrapper(){
	platform.bootstrapModule(AppModule);
}

// Hide start screen after load
if (typeof(window.cordova) != 'undefined') {
	document.addEventListener('deviceready', function () {
		initApp();
	}, false);
} else {
	initApp();
}