import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UpdateCustomerService } from '../update-customer/update-customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  id: string;
  customer: Customer = new Customer();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: LoginService,
    private httpclient: HttpClient,
    private viewcustomer: UpdateCustomerService
  ) {}

  ngOnInit(): void {
    console.log('Inside view customer component');
    // tslint:disable-next-line:no-string-literal
    this.id = this.route.snapshot.params['id'];
    console.log('the id is ' + this.id);
    // this.customer = history.state.data;
    this.viewcustomer.getCustomer(this.id).subscribe((responsedata) => {
      this.customer = { ...responsedata };
    });
  }
}
