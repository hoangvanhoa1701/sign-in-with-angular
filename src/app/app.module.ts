import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AlertComponent} from "./components";
import {HomepageComponent} from "./pages/homepage";
import {SignupComponent} from "./pages/signup";
import {SigninComponent} from "./pages/signin";

import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomepageComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
