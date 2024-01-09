import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Car } from '../../model/car';
import { CarRxjsService } from '../../services/car-rxjs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  resultSource: Car[] = [];

  constructor(private carRxjsSerivce: CarRxjsService) {}

  ngOnInit() {
    const obs: Observable<Car> = this.carRxjsSerivce.$cars;
    obs.subscribe((value: Car) => this.resultSource.push(value));
  }
}
