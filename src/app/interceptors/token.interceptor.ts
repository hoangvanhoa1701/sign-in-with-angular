import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private cookieService: CookieService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // token
    const headers = new HttpHeaders();
    const token =  this.cookieService.get('cookie-test')
    headers.append('Authorization', `Bearer ${token}`)

    const cloneRequest = request.clone({headers})
    return next.handle(cloneRequest);
  }
}
