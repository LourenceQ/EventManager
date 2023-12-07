import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  EventListComponent
  , EventThumbnailComponent
  , EventService
  , EventDetailsComponent
  , EventRouteActivator
  , EventListResolver
  , CreateEventComponent
  , CreateSessionComponent
  , SessionListComponent
  , DurationPipe
  , UpvoteComponent
  , VoterService
  , LocationValidator
 } from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import {JQ_TOKEN
  , TOASTR_TOKEN
  , Toastr
  , CollapsibleWellComponent
  , SimpleModalComponent
  , ModaltriggerDirective } from './common/index';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let toastr: Toastr = window['toastr']
let jQuery = window ['$']

@NgModule({
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
    , RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent
    , EventListComponent
    , EventThumbnailComponent
    , EventDetailsComponent
    , NavBarComponent
    , CreateEventComponent
    , Error404Component
    , CreateSessionComponent
    , SessionListComponent
    , CollapsibleWellComponent
    , DurationPipe
    , SimpleModalComponent
    , ModaltriggerDirective
    , UpvoteComponent   
    , LocationValidator 
  ], 
  providers: [
    EventService
    , { provide: TOASTR_TOKEN, useValue: toastr }
    , { provide: JQ_TOKEN, useValue: jQuery }
    , EventRouteActivator
    , EventListResolver
    , AuthService
    , VoterService
  , {
      provide: 'canDeactivateCreateEvent'
      , useValue: checkDirtyState
  }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirt)
    return window.confirm('You have not saved this event, do you really want to cancel ?')
  return true
}