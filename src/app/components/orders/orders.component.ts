import { Component, OnInit } from '@angular/core';
import { Order } from '../../e-commerce/model/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  listOrders: Order[] = [];

  constructor() {}

  ngOnInit() {}
}
