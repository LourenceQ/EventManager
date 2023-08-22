import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
      <div>
        <h1>Upcomming Angualr Events</h1>
        <hr/>
        <event-thumbnail  [event]="event1"></event-thumbnail>
      </div>
    `
})

export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2023',
    time: '10:00 am',
    price: 600,
    imageUrl: '/assets/images/angularconnect-shield',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
}