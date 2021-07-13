import { Component, OnInit } from '@angular/core';
import { AdminwebinarService } from "../adminwebinar.service";
@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.css']
})
export class WebinarComponent implements OnInit {
arr:any
  constructor(private us: AdminwebinarService) { }

  ngOnInit() {
    this.adminwebinar();
  }
  adminwebinar(){
  this.us.adminwebinar().subscribe(data => {this.arr = data;},
    (err) => {
      console.log(err);
    });
  }

}
