import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Car } from '../../model/car';
import { CarRxjsService } from '../../services/car-rxjs.service';

@Component({
  selector: 'app-miss-rainbow',
  templateUrl: './miss-rainbow.component.html',
  styleUrls: ['./../home/home.component.css'],
})
export class MissRainbowComponent implements OnInit {
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
    return this.cars.length === 4;
  }
}
