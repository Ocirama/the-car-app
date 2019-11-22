import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { CarDetailComponent }  from './cars/car-detail/car-detail.component';
import { GarageListComponent }     from './garage-list/garage-list.component';
import { AccountComponent }     from './account/account.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DealerListComponent} from "./cars/dealer-list/dealer-list.component";

const routes: Routes = [
  {path:'garage',component:GarageListComponent},
  {path:'account',component:AccountComponent},
  { path: 'dealer', component: DealerListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:brand', component: CarDetailComponent },
  { path: '',   redirectTo: '/dealer', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
