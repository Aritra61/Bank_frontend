import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private httpclient: HttpClient
  ) {}

  customer: Customer = new Customer();
  user: SocialUser;
  custData: any;
  response: Customer = new Customer();
  errormessage: string;
  errorMismatch: Boolean = false;
  errorIdNonExistant : Boolean = false;
  errorMandatory : Boolean = false;

  ngOnInit(): void {
    console.log('Inside login component method');
  }

  getErrorCondition() : Boolean {
    return this.errorMismatch || this.errorIdNonExistant || this.errorMandatory;
  }

  async onSubmit() {
    console.log('Inside onsubmit method of login component');
    if (
      this.customer.customerId &&
      this.customer.username &&
      this.customer.password
    ) {
      this.loginService
        .loginCustomer(this.customer.customerId)
        .subscribe((responsedata) => {
          this.response = { ...responsedata };
        });
      await this.delay(3000);
      if (!_.isEmpty(this.response)) {
        if (
          this.customer.customerId == this.response.customerId &&
          this.customer.username == this.response.username &&
          this.customer.password == this.response.password
        ) {
          this.router.navigate(['home', this.response.customerId], {
            state: { data: { ...this.response } },
          });
        } else {
          this.errorMismatch = true;
          this.errormessage = 'Username or password mismatch';
        }
      } else {
        this.errorIdNonExistant = true;
        this.errormessage = 'UserId does not exist';
      }
    } else {
      this.errorMandatory = true;
      this.errormessage = 'Please fill all the mandatory fields';
    }
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  onRegisterCustomer(): void {
    console.log('Inside onregistercustomer method');
    this.router.navigate(['register']);
  }

  // onLoginUsingFB(): void {
  //   console.log('FB Login initiated');
  //   this.loginService.signInWithFB();
  // }

  // onLoginUsingGoogle(): void {
  //   console.log('Google Login initiated');
  //   this.loginService.signInWithGoogle();
  // }

  /*
  async getData(str: string): Promise<any> {
    await this.loginService.signInWithFB().toPromise().then(data => {
      this.user = data;
    });
    console.log('Feteched data: ' + this.user);
  }
*/
}
