import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  constructor(private http: HttpClient) { }
  getCustomersLarge() {
    return this.http.get<any>('assets/customer-large.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
         return data;
     });
  }
}
