import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCart } from '../../model/product-cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: ProductCart[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  nextStep() {
    this.router.navigate(['/e-commerce/register']);
  }
}
