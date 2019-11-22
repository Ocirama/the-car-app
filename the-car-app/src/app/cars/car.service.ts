import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private profitSource = new BehaviorSubject<number>(0);
  currentProfit = this.profitSource.asObservable();
  constructor(private messageService: MessageService) { }
  getCars(): Observable<Car[]> {
    // TODO: send the message _after_ fetching the cars
    this.messageService.add('CarService: fetched cars');
    return of(CARS);
  }
  getCar(carBrand: string): Observable<Car> {
    // TODO: send the message _after_ fetching the car
    this.messageService.add(`CarService: fetched car brand=${carBrand}`);
    return of(CARS.find(car => car.carBrand===carBrand));
  }

  changeProfit(profit : number){
    this.profitSource.next(profit)
  }
}
