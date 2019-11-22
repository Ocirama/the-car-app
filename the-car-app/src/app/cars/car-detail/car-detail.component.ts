import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarService }  from '../car.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})

export class CarDetailComponent implements OnInit {
  @Input() car: Car;
 profit:number;
  constructor(private route: ActivatedRoute,
              private carService: CarService,
              private location: Location,
              private router: Router,) { }

  ngOnInit(): void {
    this.getCar();
    this.carService.currentProfit.subscribe(profit=>this.profit)
  }
  getCar(): void {
    const brand = +this.route.snapshot.paramMap.get('brand');
    this.carService.getCar('brand')
      .subscribe(car => this.car = car);
  }
  goBack(): void {
    this.location.back();
  }
}
