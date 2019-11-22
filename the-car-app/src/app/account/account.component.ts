import {Component, HostBinding, OnInit} from '@angular/core';
import{CarService} from "../cars/car.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  profit:number;



  constructor( private carService: CarService) { }

  ngOnInit() {
    this.carService.currentProfit.subscribe(profit=>this.profit)
  }

}
