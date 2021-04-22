import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Loan } from '../loan';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class ViewLoanService {
  

  constructor(private httpclient : HttpClient) {}

  viewLoan(id : string) {
  const url = 'http://172.18.2.134:8090/getloan/' + id;

  return this.httpclient
    .get<Loan[]>(url)
    .pipe(
      map((data) => {
        return data;
      })
    )
  }
}
