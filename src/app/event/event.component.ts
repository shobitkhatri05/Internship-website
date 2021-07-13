import { Component, OnInit } from '@angular/core';
import { AdmineventService } from '../adminevent.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
arr:any;
  constructor(private us: AdmineventService) { }

  ngOnInit() {
    this.adminevent();
  }
  adminevent(){
  this.us.adminevent().subscribe(data => {this.arr = data;},
    (err) => {
      console.log(err);
    });
  }

}
