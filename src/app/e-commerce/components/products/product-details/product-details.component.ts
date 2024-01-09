import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
