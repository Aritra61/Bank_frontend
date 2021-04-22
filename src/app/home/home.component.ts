import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';
import { AuthDetails } from '../authdetails';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id: string;
  customer: Customer = new Customer();
  authDetail = new AuthDetails();
  ishomePage: Boolean;
  pageName:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: LoginService,
    private auth: AuthService,
    private httpclient: HttpClient
  ) {
    this.pageName="Home"
    if (localStorage.length == 0){
      this.customer = history.state.data;
      this.authDetail.username = this.customer.customerId;
    this.authDetail.password = this.customer.password;
    this.auth.getAuthToken(this.authDetail);
    }
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.ishomePage = true;
    console.log('Inside homecomponent method');
    this.id = this.route.snapshot.params['id'];
    console.log('The id is ' + this.id);
  }

  onUpdateCustomer(): void {
    this.pageName="Update Customer";
    this.ishomePage=false;
    this.customer = history.state.data;
    console.log('Inside onUpdateCustomer Function of Home Comp.' + this.id);
    this.router.navigate(['home/'+this.id+'/update', this.id], {
      state: { data: { ...this.customer } },
    });
  }

  onLogout(): void {
    console.log('Inside onlogout method of homecomponent');
    if (this.dataService.getLoggedIn() === 'Y') {
      this.dataService.signOut();
    }
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  onViewCustomer(): void {
    this.pageName="View Customer";
    this.ishomePage=false;
    this.customer = history.state.data;
    console.log('Inside onViewCustomer Function of Home Comp.' + this.id);
    this.router.navigate(['home/'+this.id+'/view', this.id], {
      state: { data: { ...this.customer } },
    });
  }

  onViewLoan(): void {
    this.pageName= "View Loan"
    this.ishomePage=false;
    this.customer = history.state.data;
    console.log('Inside onviewloan method of homecomponent');
    this.router.navigate(['home/'+this.id+'/view-loan', this.id], {
      state: { data: { ...this.customer } },
    });
  }

  onApplyLoan(): void {
    this.pageName = "Apply Loan";
    this.ishomePage=false;
    this.customer = history.state.data;
    console.log('inside onapplyloan method of homecomponent');
    this.router.navigate(['home/'+this.id+'/applyloan', this.id], {
      state: { data: { ...this.customer } },
    });
  }
}
