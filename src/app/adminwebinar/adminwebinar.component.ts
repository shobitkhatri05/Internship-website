import { Component, OnInit } from '@angular/core';
import { AdminwebinarService } from "../adminwebinar.service";

@Component({
  selector: 'app-adminwebinar',
  templateUrl: './adminwebinar.component.html',
  styleUrls: ['./adminwebinar.component.css']
})
export class AdminwebinarComponent implements OnInit {
Image;
cardtitle;
shortmessage;
  constructor(private us: AdminwebinarService) { }

  ngOnInit(): void {
  }
plusData(){
  this.us.plusData(
    this.Image,
    this.cardtitle,
    this.shortmessage
  )
}
}
