import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ViewLoanService } from "./view-loan.service";

@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css'],
})
export class ViewLoanComponent implements OnInit {
  id: string;
  loans: Loan[] = new Array();
  personalLoans: Loan[] = new Array();
  housingLoans: Loan[] = new Array();
  educationLoans: Loan[] = new Array();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: LoginService,
    private httpclient: HttpClient,
    private viewloan: ViewLoanService
  ) {}

  ngOnInit(): void {
    console.log('inside view loan component');
    // tslint:disable-next-line:no-string-literal
    this.id = this.route.snapshot.params['id'];
    // this.customer = history.state.data;

    this.viewloan.viewLoan(this.id).subscribe((responsedata) => {
      for (let index in responsedata) {
        this.loans.push(responsedata[index]);
      }
      this.storeloans();
    });
  }

  storeloans() {
    console.log(this.loans);
    for (let x in this.loans) {
      if (this.loans[x].loanType.toLowerCase() === 'personal')
        this.personalLoans.push(this.loans[x]);
      if (this.loans[x].loanType.toLowerCase() === 'housing')
        this.housingLoans.push(this.loans[x]);
      if (this.loans[x].loanType.toLowerCase() === 'educational')
        this.educationLoans.push(this.loans[x]);
    }
    console.log(this.personalLoans);
    console.log(this.housingLoans);
    console.log(this.educationLoans);
  }
}
