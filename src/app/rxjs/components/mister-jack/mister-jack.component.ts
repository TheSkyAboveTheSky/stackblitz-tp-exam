import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Car } from '../../model/car';
import { CarRxjsService } from '../../services/car-rxjs.service';

@Component({
  selector: 'app-mister-jack',
  templateUrl: './mister-jack.component.html',
  styleUrls: ['./../home/home.component.css'],
})
export class MisterJackComponent implements OnInit {
  resultSource: Car[] = [];
  cars: Car[] = [];

  constructor(private carRxjsSerivce: CarRxjsService) {}

  ngOnInit() {
    const obs: Observable<Car> = this.carRxjsSerivce.$cars;
    obs
      .pipe(
        tap((valueSource: Car) => this.resultSource.push(valueSource))
        // ... update here to satisfy the client
      )
      .subscribe((value: Car) => this.sendCar(value));
  }

  sendCar(car: Car) {
    this.cars.push(car);
  }

  validateConditionClient() {
    return this.cars.filter((car: Car) => car.hasWinterTyre).length === 3;
  }

  setWinterTyreOnCar(car: Car) {
    car.hasWinterTyre = true;
  }
}
