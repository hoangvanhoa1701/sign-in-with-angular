import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import {HomepageComponent} from "./pages/homepage";
import {SigninComponent} from "./pages/signin";
import {SignupComponent} from "./pages/signup";
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-in',
    component: SigninComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'banners',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/banners/banner.module').then((m) => m.BannerModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
