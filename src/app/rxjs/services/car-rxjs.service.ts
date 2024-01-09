import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root',
})
export class CarRxjsService {
  $cars: ReplaySubject<Car> = new ReplaySubject();

  constructor() {
    this.$cars.next({ color: 'red' });
    this.$cars.next({ color: 'green' });
    this.$cars.next({ color: 'yellow' });
    this.$cars.next({ color: 'blue' });
    this.$cars.next({ color: 'red' });
    this.$cars.next({ color: 'red' });
    this.$cars.next({ color: 'red' });
    this.$cars.next({ color: 'green' });
    this.$cars.next({ color: 'green' });
    this.$cars.next({ color: 'red' });
    this.$cars.next({ color: 'blue' });
    this.$cars.next({ color: 'yellow' });
    this.$cars.next({ color: 'yellow' });
  }
}
