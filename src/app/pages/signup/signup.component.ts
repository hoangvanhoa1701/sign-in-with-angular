import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AlertService, AuthService, UserService} from "../../services";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private alertService: AlertService ) {
    // // redirect to home if already logged in
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.signUpForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    this.loading = true;
    // this.userService.register(this.signUpForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.alertService.success('Sign Up successful', true);
    //       this.router.navigate(['/sign-in']);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
  }
}
