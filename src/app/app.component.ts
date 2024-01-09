import { Component, OnInit } from '@angular/core';
import { CartService } from './e-commerce/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  nbItems: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.numberItemCartObs$.subscribe(
      (val: number) => (this.nbItems = val)
    );
  }
}
