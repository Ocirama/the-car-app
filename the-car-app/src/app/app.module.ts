import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {FormsModule} from "@angular/forms";
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GarageListComponent } from './garage-list/garage-list.component';
import { AccountComponent } from './account/account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarsModule } from './cars/cars.module';
import {DealerListComponent} from "./cars/dealer-list/dealer-list.component";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    MessagesComponent,
    DashboardComponent,
    GarageListComponent,
    AccountComponent,
    PageNotFoundComponent,
    DealerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
    CarDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
