import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { checkAlphabet, checkPassword } from './utility';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import _ from 'lodash';
import { HttpHeaders } from '@angular/common/http';
import { RegisterCustomerService} from './register-customer.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css'],
})
export class RegisterCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  cId: string;
  accountNum: number;
  ispasswordError: Boolean = true;
  errorMsgPassword: String = '';
  isEmailError = true;
  errorMsgEmail = '';
  iscontactError = true;
  contactErrorMsg = '';
  minDate: string;
  response: Customer = new Customer();
  isdatabeenfetched: boolean = false;
  errormessage: string;
  sucessmessage: string;
  istext:Boolean
  alloverError : Boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: LoginService,
    private httpclient: HttpClient,
    private regservice :RegisterCustomerService
  ) {
    var now = new Date();
    this.minDate = now.toISOString().substring(0, 10);
  }

  ngOnInit(): void {
    //this.customer.customerId = this.dataService.getCustomerCount() + 1;
    //this.customer.accountNumber = 1234567899876543;
    console.log("Inside register customer component");
  }

  //  mouseoverPass() {
  //   var obj = document.getElementById('password');
  //   this.istext=true;
  //   console.log(this.istext)
  // }
  //  mouseoutPass() {
  //   var obj = document.getElementById('password');
  //   this.istext=false;
  //  }

  async registerCustomer() {
    console.log("Inside register customer method of registercustomer component")
    this.dataService.customers.push(this.customer); 
      this.regservice.registerCustomer(this.customer)
      .subscribe((responsedata) => {
        this.response = { ...responsedata };
        if (!_.isEmpty(this.response)) {
           this.cId = this.response.customerId;
           this.isdatabeenfetched=true;
           this.showalert();
        }
      });
    await this.delay(10000);
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  areAllFieldsInserted(): Boolean {
    console.log("Inside areAllFieldsInserted method of register customer component")
    let check = false;
    if (
      this.customer.username &&
      this.customer.password &&
      this.customer.name &&
      this.customer.address &&
      this.customer.email &&
      this.customer.gender &&
      this.customer.maritalStatus &&
      this.customer.contactNumber &&
      this.customer.accountType &&
      this.customer.dateOfBirth
    ) {
      check = true;
    }
    return check;
  }

  onSubmit(): void {
    console.log("Inside onSubmit method of registercustomer component")
    console.log(this.areAllFieldsInserted());
    console.log(this.iscontactError, this.isEmailError, this.ispasswordError);
    if (
      this.areAllFieldsInserted() &&
      !this.iscontactError &&
      !this.isEmailError &&
      !this.ispasswordError
    ) {
      this.registerCustomer();
    } else {
      this.alloverError = true;
      this.errormessage = 'please fill all valid and mandetory fields';
      this.sucessmessage = '';
    }
  }

  onCancel(): void {
    console.log("Inside onsubmit method of register customer component")
    this.router.navigate(['login']);
  }

  showalert(): void {
    this.sucessmessage =
      'Please note down your user id. Your user id is ' + this.cId;
    this.errormessage = '';
  }

  onChangename(event) {
    if (checkAlphabet(event)) event.preventDefault();
  }

  onChangepassword(event) {
    console.log("Inside onChangepassword method of register customer component")
    if (!checkPassword(event)) {
      this.ispasswordError = true;
      this.errorMsgPassword =
        'Password should have at least one special character ,one number, one capital letter and should be of more than 8 digits';
    } else {
      this.ispasswordError = false;
      this.errorMsgPassword = '';
    }
  }

  checkEmail(event) {
    console.log("Inside checkEmail method of registercustomer component")
    if (event.target.value.includes('@') && event.target.value.includes('.')) {
      this.isEmailError = false;
      this.errorMsgEmail = '';
    } else {
      this.isEmailError = true;
      this.errorMsgEmail = 'Email should have @ and . sign';
    }
  }

  checkLength(event) {
    console.log("Inside checkLength method of registercustomer component");
    if (event.target.value.length === 10) {
      this.iscontactError = false;
      this.contactErrorMsg = '';
    } else {
      this.iscontactError = true;
      this.contactErrorMsg = 'Contact number should be of 10 digits';
    }
  }
}
