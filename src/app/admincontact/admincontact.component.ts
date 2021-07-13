import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-admincontact',
  templateUrl: './admincontact.component.html',
  styleUrls: ['./admincontact.component.css']
})
export class AdmincontactComponent implements OnInit {
  arr:any

  constructor(private us : ContactService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.us.getData().subscribe(data => { this.arr = data; },
      (err) => {
        console.log(err);
      });
  }

}
