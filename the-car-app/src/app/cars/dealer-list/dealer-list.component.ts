import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service'
import {CARS} from "../mock-cars";

@Component({
  selector: 'app-cars',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.scss']
})

export class DealerListComponent implements OnInit {
  cars = CARS;
  //cars: Car[];
  profit: number;
  selectedCar: Car;
  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
    this.carService.currentProfit.subscribe(profit => this.profit)
  }
  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }

  sellCar(car) {
    this.cars = this.cars.filter(c => c !== car);
    //this.carService.currentProfit += this.getCarPrice(car.carPrice);
    this.carService.changeProfit(5)
  }

  /*repairCar(car){
    const repairPrice =
  }
  */
  getCarPrice(carPrice) {

    const returnedPrice = carPrice > 2000 ? carPrice * 0.8 : carPrice;

    return returnedPrice;
  }
}

