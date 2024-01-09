import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Car } from '../../model/car';
import { CarRxjsService } from '../../services/car-rxjs.service';

@Component({
  selector: 'app-mister-red',
  templateUrl: './mister-red.component.html',
  styleUrls: ['./../home/home.component.css'],
})
export class MisterRedComponent implements OnInit {
  resultSource: Car[] = [];
  cars: Car[] = [];

  constructor(private carRxjsSerivce: CarRxjsService) {}

  ngOnInit() {
    const obs: Observable<Car> = this.carRxjsSerivce.$cars;
    obs
      .pipe(
        tap((valueSource: Car) => this.resultSource.push(valueSource))
        // ... update to satisfy the client
      )
      .subscribe((value: Car) => this.sendCar(value));
  }

  sendCar(car: Car) {
    this.cars.push(car);
  }

  validateConditionClient() {
    return this.cars.every((car) => car.color === 'red');
  }
}
