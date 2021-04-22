import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { checkAlphabet, checkPassword } from '../register-customer/utility';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import _ from 'lodash';
import { UpdateCustomerService } from './update-customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  response: Customer = new Customer();
  cId: string;
  accountNum: number;

  ispasswordError = false;
  errorMsgPassword = '';
  isEmailError = false;
  errorMsgEmail = '';
  iscontactError = false;
  contactErrorMsg = '';
  minDate: string;
  isDobError: boolean;
  dobErrorMsg = '';
  isUsernameError: boolean;
  usernameErrorMsg = '';
  sucessmessage: string;
  errormessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: LoginService,
    private httpclient: HttpClient,
    private updatecustomer: UpdateCustomerService,
    private login: LoginService
  ) {
    const now = new Date();
    this.minDate = now.toISOString().substring(0, 10);
  }

  async ngOnInit() {
    console.log('Inside update customer component');
    // this.customer.customerId = this.dataService.getCustomerCount() + 1;
    // this.customer.accountNumber = 1234567899876543;
    // tslint:disable-next-line:no-string-literal
    this.cId = this.route.snapshot.params['id'];
    console.log(this.cId);
    //this.customer = history.state.data;
    //console.log(this.customer);
    console.log('Inside ngOnInit of home ts customerId: ' + this.customer);
    this.isDobError = false;
    this.isUsernameError = false;

    this.updatecustomer.getCustomer(this.cId).subscribe((responsedata) => {
      this.response = { ...responsedata };
      this.customer = this.response;
    });
  }

  async updateCustomer() {
    this.updatecustomer
      .updateCustomer(this.customer)
      .subscribe((responsedata) => {
        //console.log(responsedata);
        // this.response = responsedata;
        // console.log(this.response);
        this.cId = responsedata.customerId;
        this.response = { ...responsedata };
      });
    // console.log(this.response);
    await this.delay(2000);

    if (!_.isEmpty(this.response)) {
      this.sucessmessage = 'User details successfully updated';
      this.errormessage = '';
      this.customer = this.response;
    }

    // this.router.navigate(['/home',this.cId], {state:{data: {...this.response}}});
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  checkUsername(event): void {
    if (event.target.value === '') {
      console.log('Username is Empty');
      this.isUsernameError = true;
      this.usernameErrorMsg = 'Username is a required field';
    } else {
      this.isUsernameError = false;
      this.usernameErrorMsg = '';
    }
  }

  areAllFieldsInserted(): boolean {
    let check = false;
    if (this.customer == null) return false;
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
      this.customer.dateOfBirth &&
      this.customer.accountnumber &&
      this.customer.dateOfRegistration &&
      this.customer.gurdianName &&
      this.customer.gurdianType &&
      this.customer.country &&
      this.customer.state &&
      this.customer.citizenShip &&
      this.customer.citizenStatus &&
      this.customer.bankName &&
      this.customer.branchName &&
      this.customer.idproofType &&
      this.customer.iddocNumber &&
      this.customer.refaccholderName &&
      this.customer.refaccholderAccNo &&
      this.customer.refaccholderAddress
    ) {
      check = true;
    }
    return check;
  }

  onSubmit(): void {
    // this.updateCustomer();
    console.log(this.areAllFieldsInserted());
    console.log(
      this.iscontactError,
      this.isEmailError,
      this.ispasswordError,
      this.isDobError
    );
    if (
      this.areAllFieldsInserted() &&
      !this.iscontactError &&
      !this.isEmailError &&
      !this.ispasswordError &&
      !this.isDobError
    ) {
      this.updateCustomer();
    } else {
      this.errormessage = 'Please fill all valid and mandetory fields';
      this.sucessmessage = '';
    }
  }

  showalert(message: string): void {
    alert(this.customer.name + message);
  }

  onChangename(event): void {
    if (checkAlphabet(event)) {
      event.preventDefault();
    }
  }

  onChangepassword(event): void {
    if (!checkPassword(event)) {
      this.ispasswordError = true;
      this.errorMsgPassword =
        'Password should have at least one special character ,one number, one capital letter and should be of more than 8 digits';
    } else {
      this.ispasswordError = false;
      this.errorMsgPassword = '';
    }
  }

  checkEmail(event): void {
    console.log(event);
    if (event.target.value.includes('@') && event.target.value.includes('.')) {
      this.isEmailError = false;
      this.errorMsgEmail = '';
    } else {
      this.isEmailError = true;
      this.errorMsgEmail = 'Email should have @ and . sign';
    }
  }

  checkDob(event): void {
    if (event.target.value === '') {
      console.log('DOB is Empty');
      this.isDobError = true;
      this.dobErrorMsg = 'Date of birth is a required field';
    } else {
      this.isDobError = false;
      this.dobErrorMsg = '';
    }
  }

  checkLength(event): void {
    if (event.target.value.length === 10) {
      this.iscontactError = false;
      this.contactErrorMsg = '';
    } else {
      this.iscontactError = true;
      this.contactErrorMsg = 'Contact number should be of 10 digits';
    }
  }
}
