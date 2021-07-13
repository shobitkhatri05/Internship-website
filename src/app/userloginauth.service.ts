import { Injectable } from '@angular/core';
import { Router, CanActivate, Route } from "@angular/router";
import { RegisterService } from "../app/register.service";

@Injectable({
  providedIn: 'root'
})
export class UserloginauthService implements CanActivate{

  constructor(private auth: RegisterService, private router: Router) { }

canActivate(){
  if(!this.auth.getJwt()){
    return true
  }
  else{
    return this.router.parseUrl('event')
  }
}

}
