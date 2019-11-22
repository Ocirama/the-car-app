import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealerListComponent }    from './dealer-list/dealer-list.component';
import { CarDetailComponent }  from './car-detail/car-detail.component';

const routes: Routes = [
  { path: 'cars',  component: DealerListComponent },
  { path: 'car/:brand', component: CarDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
