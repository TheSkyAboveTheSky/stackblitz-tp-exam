import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  addProductToCart() {
    if (this.product) {
      this.cartService.addProductToCart(this.product);
    }
  }
}
