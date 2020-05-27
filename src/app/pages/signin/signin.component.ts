import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService, AuthService} from "../../services";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  loading = false;
  submitted = false;
  token: string;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService
  ) {
    this.token = this.cookieService.get('cookie-test');
    // redirect to home if already logged in
    if (this.token) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.signInForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    this.authService.signIn(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(resp => {
      // login successful if there's a jwt token in the response
      if (resp.data && resp.data.token) {
        // store user details and jwt token in cookie to
        // keep user logged in between page refreshes
        this.cookieService.set('cookie-test', resp.data.token);
        this.authService.currentUserValue = resp.data.token;
        this.router.navigate([this.returnUrl]);
      }
    },
        error => {
      this.alertService.error('Sign In Failed');
      this.loading = false;
    });
    this.loading = true;
  }
}
