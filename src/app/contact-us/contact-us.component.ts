import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
name;
email;
message;
  constructor(private us: ContactService) { }

  ngOnInit(): void {
  }
  addData(){
    this.us.addData(this.name,this.email,this.message)
  }

}
