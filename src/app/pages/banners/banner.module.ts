import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../../helpers/auth.guard";

import {BannerListComponent} from "./banner-list/banner-list.component";
import {BannerCreateComponent} from "./banner-create/banner-create.component";
import {BannerDetailComponent} from "./banner-detail/banner-detail.component";

const routes: Routes = [
  {
    path: '',
    component: BannerListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'banner/create',
    component: BannerCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: BannerDetailComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [BannerListComponent, BannerCreateComponent, BannerDetailComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BannerModule { }
