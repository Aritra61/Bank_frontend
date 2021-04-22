import { HttpClient } from "@angular/common/http";
import { Customer } from "../customer";
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RegisterCustomerService {
    customer : Customer;
    constructor(
        private httpclient: HttpClient
    ){}

     registerCustomer(customer) : any {
        return this.httpclient
        .post <Customer>('http://172.18.2.134:8090/saveuser', customer)
        .pipe(
          map((datalist) => {
            return datalist;
          }))
        
    }
    
}