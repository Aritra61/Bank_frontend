import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdateCustomerService {
  constructor(private httpclient: HttpClient) {}

  updateCustomer(customer: Customer) {
    return this.httpclient
      .post<Customer>('http://172.18.2.134:8090/updateuser', customer)
      .pipe(
        map((datalist) => {
          return datalist;
        })
      );
  }

  getCustomer ( id : string) {
    const url = 'http://172.18.2.134:8090/getuser/' + id;
    return this.httpclient
      .get<Customer>(url)
      .pipe(
        map((data) => {
          return data;
        })
      )
  }
}
