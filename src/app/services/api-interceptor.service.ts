import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthenticationService // private matSnackBar: MatSnackBar
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let url = req.url;

    // Do not set headers for login api
    if (url.endsWith('/Login')) {
      return next.handle(req);
    }

    // Get the auth token from the service.
    const authToken = localStorage.getItem('token');

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          // Redirect to logout URL here
          // this.toastr.error('Unauthenticated', 'Message', {
          //   timeOut: 3000,
          // });
          // this.authService.logout(false);
        }
        if (error.status == 503) {
          // this.matSnackBar.open('Service Temporarily Unavailable', 'Dismiss', {
          //   duration: 4000,
          // });
          // this.toastr.error('Service Temporarily Unavailable', 'Message', {
          //   timeOut: 3000,
          // });
        }
        return throwError(() => error);
      })
    );
  }
}
