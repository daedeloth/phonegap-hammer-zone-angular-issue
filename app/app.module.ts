import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Components
 */
import {AppComponent}  from './app.component';

/**
 * Config
 */


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [
		AppComponent
	],
})
export class AppModule {

}

