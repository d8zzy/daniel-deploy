import { HttpBackend, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { handleError } from './apiErrorHandler';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private httpClient: HttpClient;
  credentials!: string;

  constructor(
    private http: HttpClient,
    private handler: HttpBackend,
    private router: Router
  ) {
    this.httpClient = new HttpClient(this.handler);
  }

  login(email: string, password: string, type: string): Observable<any> {
    let queryParams = new HttpParams();
    email ? (queryParams = queryParams.append('email', email)) : null;
    password ? (queryParams = queryParams.append('password', password)) : null;
    type ? (queryParams = queryParams.append('type', type)) : null;
    return this.http
      .post<any>(environment.apiBaseUrl + `/login`, {
        params: queryParams,
      })
      .pipe(catchError(handleError));
  }

  verifyEmail(email: string, userType: string): Observable<any> {
    let queryParams = new HttpParams();
    email ? (queryParams = queryParams.append('email', email)) : null;
    userType ? (queryParams = queryParams.append('userType', userType)) : null;
    return this.http
      .post<any>(environment.apiBaseUrl + `/email/send`, {
        params: queryParams,
      })
      .pipe(catchError(handleError));
  }

  signup(
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    type: string,
    gender: string,
    dob: string,
    phone: string,
    company_name: string,
    company_address: string,
    state: string,
    lga: string
  ): Observable<any> {
    let queryParams = new HttpParams();
    email ? (queryParams = queryParams.append('email', email)) : null;
    firstname
      ? (queryParams = queryParams.append('firstname', firstname))
      : null;
    lastname ? (queryParams = queryParams.append('lastname', lastname)) : null;
    password ? (queryParams = queryParams.append('password', password)) : null;
    type ? (queryParams = queryParams.append('type', type)) : null;
    gender ? (queryParams = queryParams.append('gender', gender)) : null;
    dob ? (queryParams = queryParams.append('dob', dob)) : null;
    phone ? (queryParams = queryParams.append('phone', phone)) : null;
    company_name
      ? (queryParams = queryParams.append('company_name', company_name))
      : null;
    company_address
      ? (queryParams = queryParams.append('company_address', company_address))
      : null;
    state ? (queryParams = queryParams.append('state', state)) : null;
    lga ? (queryParams = queryParams.append('lga', lga)) : null;
    return this.http
      .post<any>(environment.apiBaseUrl + `/register`, {
        params: queryParams,
      })
      .pipe(catchError(handleError));
  }

  getVendors(): Observable<any> {
    return this.http
      .get<any>(environment.apiBaseUrl + `vendors/random`)
      .pipe(catchError(handleError));
  }

  // logout(notRedirect?: boolean) {
  //   localStorage.removeItem('last_url');

  //   localStorage.removeItem('token');
  //   localStorage.removeItem('personal_data');
  //   localStorage.removeItem('company_data');
  //   localStorage.removeItem('user_details');
  //   localStorage.removeItem('verification_data');
  //   if (notRedirect == false) {
  //     localStorage.setItem('last_url', this.router.url);
  //   }
  //   this.router.navigate(['/onboarding/login']);
  // }
}
