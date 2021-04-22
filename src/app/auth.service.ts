import { Injectable } from '@angular/core';
import { HttpClient , HttpInterceptor, HttpRequest , HttpHandler , HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthDetails } from './authdetails';
import { map } from 'rxjs/operators';
import {Token} from './token';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService implements HttpInterceptor {
    urlsToNotUse: Array<string>;
  constructor(private http: HttpClient, private router: Router) {
    this.urlsToNotUse= [
        'http://172.18.2.134:8090/authenticate',
        'http://172.18.2.134:8090/saveuser',
        'http://172.18.2.134:8090/loginuser/'
      ];
  }

  authDetail = new AuthDetails();
  token = new Token ();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.isValidRequestForInterceptor(request.url)) {
        let modifiedRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('auth_token')}`, 
              }
        });
        return next.handle(modifiedRequest);
      }
      return next.handle(request);
    }


  getAuthToken(authDetail : AuthDetails) {
    console.log(authDetail)
    
    localStorage.clear();
    sessionStorage.clear();
    this.http.post <Token>(
      'http://172.18.2.134:8090/authenticate',
      authDetail
    ).pipe(map(data => {
       return data;
      })).
      subscribe(responsedata => {
       // this.response = responsedata;
       localStorage.setItem('auth_token', responsedata.token);
      });
  }

   isValidRequestForInterceptor(requestUrl: string): boolean {
      for (let address in  this.urlsToNotUse) {
       if(requestUrl === this.urlsToNotUse[address])
        return false;
      
      else if(this.urlsToNotUse[address] === 'http://172.18.2.134:8090/loginuser/'
      &&  requestUrl.substring(0,35) === this.urlsToNotUse[address])
        return false;
      }
    return true;
  }
}
