import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../../app/register.service";

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {

  constructor(private user: RegisterService) { }

  ngOnInit(): void {
  }
  logout(){
    this.user.logout()
  }

}
