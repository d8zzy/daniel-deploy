import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export function handleError(errorResponse: HttpErrorResponse) {
  if (errorResponse.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('Local or network error: ', errorResponse.message);
    return throwError(() => errorResponse.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${errorResponse.status} ${JSON.stringify(
        errorResponse.error.message
      )}`
    );
    throwError(() => errorResponse.error);
  }
  // return an observable with a user-facing error message
  let errs;
  const { message, Message, status, errors, error } = errorResponse.error;
  if (errors) {
    errs = Object.values(errors);
  }
  const err = new Error(`${errs ? errs : message ? message : Message}`);
  return throwError(() => err);
}
