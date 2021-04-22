import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Loan } from './loan';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/serverApi';
  initialDeposit: number;
  accountHolderName: string;
  user: SocialUser;
  loggedIn: string;
  cust: Customer;

  constructor(private http: HttpClient, private authService: SocialAuthService, private router: Router) {
  }

  loans: Loan[];
  customers: Customer[] = [
    {
      customerId: 'R-100',
      name: 'AC',
      username: 'Aritra',
      password: 'Admin@123',
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      email: 'ac@abc.com',
      gender: 'male',
      maritalStatus: 'unmarried',
      contactNumber: '1111111111',
      dateOfBirth: null,
      accountnumber: "1234567899876543",
      accountType: null,
      initialDepositAmount: 500.25,
      gurdianName: "abc",
      gurdianType: "father",
      country: "India",
      state: "WB",
      citizenShip: "Indian",
      citizenStatus: "active",
      dateOfRegistration: null,
      bankName: 'SBI',
      branchName: 'kadam',
      idproofType: 'pan',
      iddocNumber: '213213',
      refaccholderName: "Mallika",
      refaccholderAccNo: '23413',
      refaccholderAddress: '23/345'
    },    
  ];

  // "2012-07-12T00:00:00.000Z"  JSON Date Format

  validateLogin(customer: Customer): Customer {
    // in real time there will be separate service call to the given service URL
    console.log('we are in validateLogin Function');
    for (const c of this.customers) {
      if (c.username === customer.username && c.password === customer.password) { return c; }
    }
    return null;
  }
  getInitialDeposit(): any {
    return this.initialDeposit;
  }

  getAccountHolderName(): string {
    return this.accountHolderName;
  }

  loginCustomer(id : string) {
    const url = "http://172.18.2.134:8090/loginuser/"+id;
    return this.http.get <Customer> (url).pipe(map(data=>{
      return data;
    }))
  }

  getCustomerById(id: string): Customer {
    console.log('Inside getCustomerById: ' + id);
    console.log('Customer: ' + this.customers[0].customerId);
    // tslint:disable-next-line:prefer-const
    for (let cust of this.customers) {
      if (id === cust.customerId) {
        console.log('Inside username : ' + cust.username);
        return cust;
      }
    }
    return null;
  }

  getCustomerCount(): number {
    return this.customers.length;
  }

  // signInWithFB(): any {
  //   this.authService.initialized = true;
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = 'Y';
  //     console.log(this.user);
  //     this.authService.signOut();
  //     this.router.navigate(['home', 'R-100']);
  //   }, error => {
  //     console.log('Error occured');
  //   }).add(() => {
  //     this.authService.signOut();
  //     this.router.navigate(['home', 'R-100']);
  //   });
  // }

  // signInWithGoogle(): any {
  //   this.authService.initialized = true;
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = 'Y';
  //     console.log(this.user);
  //     this.router.navigate(['home', 'R-300']);
  //   }, error => {
  //     console.log('Error occured');
  //   }).add(() => {
  //     this.router.navigate(['home', 'R-300']);
  //   });
  // }

  signOut(): void {
    this.authService.signOut();
  }
  getLoggedIn(): string {
    return this.loggedIn;
  }

  // isInitialized(): Observable<boolean> {
  //   return new Observable((observer) => {
  //     if (this.authService.initialized) {
  //       observer.next(this.authService.initialized);
  //       observer.complete();
  //       observer.unsubscribe();
  //     } else {
  //       observer.next(this.authService.initialized);
  //     }
  //   });
  // }
}
