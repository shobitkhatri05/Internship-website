import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { RegisterService } from "../app/register.service";


@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate{

  constructor(private auth: RegisterService,private router:Router) { }
  canActivate():boolean{
    if(!this.auth.getJwt()){
      this.router.navigateByUrl('/login');
      return false
    }
    else{
      return true
    }
  }
}
