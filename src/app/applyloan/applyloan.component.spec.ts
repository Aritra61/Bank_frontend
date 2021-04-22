import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyloanComponent } from './applyloan.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { RegisterCustomerComponent } from '../register-customer/register-customer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../login.service';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApplyLoanService } from '../applyloan/applyloan.service';
import { Loan } from '../loan';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('ApplyloanComponent', () => {
  let component: ApplyloanComponent;
  let fixture: ComponentFixture<ApplyloanComponent>;

  const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home/:id', component: HomeComponent},
    { path: 'applyloan/:id', component: ApplyloanComponent},
    { path: 'view/:id', component: ViewCustomerComponent },
    { path: 'update/:id', component: UpdateCustomerComponent },
    { path: 'register', component: RegisterCustomerComponent }
  ];

  let service: ApplyLoanService; 
  let loan: Loan ; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [LoginService, SocialAuthService, HttpClient, 
       ApplyLoanService ,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {id: 'R-100'}}}
        },
        {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                'clientId'
              ),
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('clientId'),
            },
            {
              id: AmazonLoginProvider.PROVIDER_ID,
              provider: new AmazonLoginProvider(
                'clientId'
              ),
            }
          ],
        } as SocialAuthServiceConfig,
      }],
      declarations: [ ApplyloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyloanComponent);
    
    component = fixture.componentInstance;
    
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Submit Button check', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Submit');
  });

  it('Loan Type label check', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('Loan Type:');
  });

  let data = {
    loanType : 'personal',
  
  }
  it('Check the sucess message', () => {
    component.loan.loanType=''
    component.loan.rateOfInterest=''
    component.loan.loanIssueDate=''
    component.loan.loanDuration = ''
    component.loan.loanAmount = ''
    component.loan.annualIncome = ''
    component.loan.companyName = ''
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const ele = compiled.query(By.css('.display_sucess'));
    const button = compiled.query(By.css('.btn-primary'));
    button.triggerEventHandler('click',null);
    console.log(ele)
    expect(component.errormessage).toContain('please');
  });

 
});
