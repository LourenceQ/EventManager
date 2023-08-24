import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";

declare let toastr

@Component({
    selector: 'events-list',
    template: `
      <div>
        <h1>Upcomming Angualr Events</h1>
        <hr/>
        <div class="row">
          <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail 
            (click)="handleThumbNailClick(event.name)"
            [event]="event"></event-thumbnail>
          </div>
        </div>        
      </div>
    `
})

export class EventListComponent implements OnInit{
  events: any[]

  constructor(private eventService: EventService
    , private toastr: ToastrService) {
    
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbNailClick(eventName) {
    this.toastr.success(eventName)
  }
}