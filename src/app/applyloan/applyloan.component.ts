import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormBuilder,
} from '@angular/forms';

import { filter, map } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { MatCardModule } from '@angular/material/card';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Loan } from '../loan';
import { HttpClient } from '@angular/common/http';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { ApplyLoanService } from './applyloan.service'

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css'],
})
export class ApplyloanComponent implements OnInit {
  // minDate: Date;
  loan: Loan = new Loan();
  response: any;
  roi: any;
  initialDeposit: number;
  accountHolderName: string;
  id: string;
  customer: Customer;
  issueDate: any;
  minDate: string;
  errormessage: string;
  sucessmessage: string;
  prevloanType: string;

  form = new FormGroup({
    loanType: new FormControl('', Validators.required),
    loanAmount: new FormControl('', Validators.required),
    rateOfInterest: new FormControl(
      { value: '', disabled: true },
      Validators.required
    ),
    loanDuration: new FormControl('', Validators.required),
    issueDate: new FormControl('', Validators.required),
    courseFee: new FormControl('NA', Validators.required),
    courseName: new FormControl('NA', Validators.required),
    annualIncome: new FormControl('NA', Validators.required),
    companyName: new FormControl('NA', Validators.required),
    fatherName: new FormControl('NA', Validators.required),
    // 'picker':new FormControl('',Validators.required)
  });

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private httpclient: HttpClient,
    private applyloanservice : ApplyLoanService
  ) {
    const now = new Date();
    this.minDate = now.toISOString().substring(0, 10);
  }

  ngOnInit(): void {
    console.log("Inside Apply Loan Component");
    this.id = this.route.snapshot.params.id;
    console.log('Id value:' + this.id);
    this.loan.customerId = this.id;
  }

  display(): void {
    console.log("Inside display method of applyloan component");
  }

  async getInterestRates(loan): Promise<any> {
    console.log("Inside getInterestrates method of applyloan component");
    await this.applyloanservice
      .getInterestRates()
      .toPromise()
      .then((data) => {
        this.response = data;
      });
    
    this.roi = this.response.find((e) => e.type === loan.toString()).rate;
    console.log("This is the rate of interest "+ this.roi);
  }

  async submit() {
    console.log("Inside submit method of applyloan component");
    const formValue = { ...this.form.value };
    for (const prop in formValue) {
      if (!formValue[prop]) {
        // delete formValue[prop];
        if (
          formValue.loanType === '' ||
          formValue.loanAmount === '' ||
          formValue.loanDuration === '' ||
          formValue.issueDate === ''
        ) {
          this.errormessage = 'please fill all valid and mandetory fields';
          this.sucessmessage = '';
          return;
        } else {
          if (
            formValue.loanType === 'personal' ||
            formValue.loanType === 'housing'
          ) {
            if (formValue.annualIncome === '' || formValue.companyName === '') {
              this.errormessage='please fill all valid and mandetory fields';
              this.sucessmessage = '';
              return;
            }
          } else {
            if (formValue.loanType === 'educational') {
              if (
                formValue.courseFee === '' ||
                formValue.courseName === '' ||
                formValue.fatherName === ''
              ) {
                this.errormessage='please fill all valid and mandetory fields';
                this.sucessmessage = '';
                return;
              }
            }
          }
        }
      }
    }
    this.loan.rateOfInterest = this.roi;
    this.conditionalReset();
    if (this.checkifAllDatafilled()) {
        this.applyloanservice.applyLoan(this.loan).subscribe((responsedata) => {
          // this.response = responsedata;
          this.loan={...responsedata};

        });
      await this.delay(2000);
      this.generateAlert();
      // this.router.navigate(['/home', this.id], {
      //   state: { data: { ...this.customer } },
      // });
    } else {
      this.errormessage = 'Please fill all valid and mandetory fields';
      this.sucessmessage = '';
    }
  }

  checkifAllDatafilled(): Boolean {
    console.log("Inside checkifalldatafilled method of applyloan component")
    if (this.loan.loanType == 'personal' || this.loan.loanType == 'housing') {
      if (
        this.loan.rateOfInterest &&
        this.loan.loanIssueDate &&
        this.loan.loanDuration &&
        this.loan.loanAmount &&
        this.loan.annualIncome &&
        this.loan.companyName
      ) {
        return true;
      }else
       {
        return false;
      }
    }
    else if(this.loan.loanType == 'educational'){
      if(this.loan.rateOfInterest && this.loan.loanIssueDate && this.loan.loanDuration
        && this.loan.loanAmount && this.loan.courseName && this.loan.fatherName
        && this.loan.courseFee){
          return true;
        }else{
          return false;
        }
    }
  }

  delay(ms: number) {
    console.log("Inside delay method of applyloan component");
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


  onOptionsSelected(loan: string): void {
    this.getInterestRates(loan);
    this.form.get('loanType').setValue(loan);
    console.log("inside onoptionselected method of applyloan component");
  }

  generateAlert(): void {
    console.log("Inside generatealert method of applyloan component");
    this.sucessmessage = 
      'Your ' +
        this.form.controls.loanType.value +
        ' loan request successfuly sent for verification, Loan id : ' +
        this.loan.loanId
    ;
    this.errormessage='';
    
  }

  conditionalReset() : void {
    if((this.loan.loanType ==='educational') &&
      (this.prevloanType === 'personal' || this.prevloanType=== 'housing')){
        this.loan.annualIncome='';
        this.loan.companyName='';
      }
     else if((this.prevloanType !== this.loan.loanType) &&
        (this.prevloanType === 'educational')){
         this.loan.courseFee='';
         this.loan.courseName='';
         this.loan.fatherName='';
        }
    this.prevloanType = this.loan.loanType;
  }

  reset(): void {
    this.loan.annualIncome='';
    this.loan.companyName=''
    this.loan.courseFee=''
    this.loan.courseName=''
    this.loan.fatherName=''
    this.loan.loanAmount=''
    this.loan.loanDuration=''
    this.loan.loanId=''
    this.loan.loanIssueDate=''
    this.loan.loanType=''
    this.loan.rateOfInterest=''
  }
}
