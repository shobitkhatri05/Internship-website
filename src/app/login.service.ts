import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { noUndefined } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  addData(name,email,feedback) {
      const obj = {name,email,feedback};
      this
          .http
          .post(`${this.url}/addData`, obj)
          .subscribe(res => console.log(res));
          console.log("working")
  }
  
  getData() {
      return(
      this
          .http 
          .get(`${this.url}/getData`)
      );
  }
  // upData(id, name) {
  //     const obj = { name };
  //     this
  //         .http
  //         .post(`${this.url}/update/${id}`, obj)
  //         .subscribe(res => console.log(res));
  // }
  // delData(id) {
  //     return this.http.get(`${this.url}/delete/${id}`).subscribe();
  // }
  // editData(id) {
  //   return this
  //           .http
  //           .get(`${this.url}/edit/${id}`);
  //   }


    // up_data(name,email,feedback, id) {

    //   const obj = {
    //       name: name,
    //       email: email,
    //       feedback: feedback

          
    //     };
    //   this
    //     .http
    //     .post(`${this.url}/update/${id}`, obj)
    //     .subscribe(res => console.log('Done'));
    // }
}
