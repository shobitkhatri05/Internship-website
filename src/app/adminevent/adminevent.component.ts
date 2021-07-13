import { Component, OnInit } from '@angular/core';
import { AdmineventService } from "../adminevent.service";
@Component({
  selector: 'app-adminevent',
  templateUrl: './adminevent.component.html',
  styleUrls: ['./adminevent.component.css']
})
export class AdmineventComponent implements OnInit {
  Images;
  cardtitles;
  shortmessages;

  constructor(private us: AdmineventService) { }

  ngOnInit(): void {
  }
  pluseventData(){
    this.us.pluseventData(
      this.Images,
      this.cardtitles,
      this.shortmessages
    )
  }

}
