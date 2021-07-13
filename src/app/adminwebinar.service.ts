import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AdminwebinarService {

  url = 'http://localhost:3000';
constructor(private http: HttpClient){}
plusData(Image,cardtitle,shortmessage) {
  let obj5 = {
    Image,cardtitle,shortmessage
  }
  console.log(obj5)
  this.http.post(`${this.url}/plusData`, obj5).subscribe((res: any) => {
    if (res.message) {
      alert(res.message);
    }
  })
}

adminwebinar() {
  return(
  this
      .http 
      .get(`${this.url}/adminwebinar`)
  );
}




}
