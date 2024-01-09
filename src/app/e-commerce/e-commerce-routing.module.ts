import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterOrderComponent } from './components/register-order/register-order.component';
import { SuccessOrderComponent } from './components/success-order/success-order.component';
import { HomeEcommerceComponent } from './components/home-ecommerce/home-ecommerce.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeEcommerceComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'register',
    component: RegisterOrderComponent,
  },
  {
    path: 'success-order',
    component: SuccessOrderComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECommerceRoutingModule {}
