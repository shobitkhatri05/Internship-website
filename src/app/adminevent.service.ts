import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmineventService {

  url = 'http://localhost:3000';
  constructor(private http:HttpClient){}
  pluseventData(Images,cardtitles,shortmessages){
    let obj5 ={
      Images,cardtitles,shortmessages
    };
    console.log(obj5)
    this.http.post(`${this.url}/pluseventData`, obj5).subscribe((res :any) => {
      if (res.message){
        alert(res.message);
      }
    })
  }
 adminevent(){
   return(
     this.http.get(`${this.url}/adminevent`)
   );
 }

}
