import { HttpClient } from '@angular/common/http';
import { Loan } from '../loan';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplyLoanService {
  constructor(private httpclient: HttpClient) {}

  applyLoan(loan: Loan) {
    return this.httpclient
      .post<Loan>('http://172.18.2.134:8090/applyloan', loan)
      .pipe(
        map((datalist) => {
          let objectdata = [];
          return datalist;
        })
      );
  }

  getInterestRates(): Observable<object> {
    return this.httpclient.get('../assets/interestrate.json');
  }
}
