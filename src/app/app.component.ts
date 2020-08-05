import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'final';
  navbar=[
    {
      name:'Tirumala Package',
      id:''
    },
    {
      name:'South Tour Packages',
      id:''
    },
    {
      name:'Special Tour Packages',
      id:''
    },
    {
      name:'Car Rentals',
      id:''
    },
    {
      name:'Tickets',
      id:''
    },
    {
      name:'Hotel Bookings',
      id:''
    },
  ]
}
