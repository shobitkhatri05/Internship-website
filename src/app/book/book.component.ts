import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  name;
  email;
  feedback;
  constructor(private us: LoginService) { }

  ngOnInit() {
  }
  addData(){
    this.us.addData(this.name,this.email,this.feedback)
  }

}
