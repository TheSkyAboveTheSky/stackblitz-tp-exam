import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product';
import { ProductCart } from '../model/product-cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  cart: ProductCart[] = [];
  numberItemCartObs$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}

  getCart() {
    return this.cart;
  }

  addProductToCart(product: Product) {
    const productInCart: ProductCart | undefined = this.cart.find(
      (prod) => prod.id === product.id
    );
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
      this.numberItemCartObs$.next(this.cart.length);
    }
  }

  removeProductToCart(product: Product) {
    // A compléter
  }
}
