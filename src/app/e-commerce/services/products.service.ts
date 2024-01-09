import { Injectable } from '@angular/core';
import { mockProductsList } from '../data/mock-product';
import { Product } from '../model/product';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  products: Product[] = [];
  constructor() {
    this.products = mockProductsList;
  }

  getProducts(): Product[] {
    return this.products;
  }
}
