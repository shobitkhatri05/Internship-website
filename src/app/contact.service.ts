import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { noUndefined } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  addData(name,email,message) {
    const obj = {name,email,message};
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
editData(id) {
  return this
          .http
          .get(`${this.url}/edit/${id}`);
  }
  up_data(name,email,message, id){

    const obj ={
      name: name,
      email: email,
      message: message,
    };
    this
    .http
    .post(`${this.url}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}
}




