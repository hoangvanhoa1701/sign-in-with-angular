import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from './services';
import {takeUntil} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-with-angular';
  currentUser: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) {
    const token = this.cookieService.get('cookie-test')
    if (token) {
      this.authService.currentUserValue = token
    }

    this.authService.currentUser.subscribe(token => {
      this.currentUser = token
    })

  }

  signOut() {
    this.authService.signOut();
    this.cookieService.delete('cookie-test');
    this.router.navigate(['/sign-in']);
  }
}
