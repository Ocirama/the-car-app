import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CarsRoutingModule } from './cars-routing.module';
import { DealerListComponent }    from './dealer-list/dealer-list.component';
import {AppModule} from "../app.module";


@NgModule({
  declarations: [DealerListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CarsRoutingModule,
    AppModule
  ]
})
export class CarsModule { }
