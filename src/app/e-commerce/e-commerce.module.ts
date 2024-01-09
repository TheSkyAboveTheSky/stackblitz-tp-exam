import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from './components/products/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterOrderComponent } from './components/register-order/register-order.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { SuccessOrderComponent } from './components/success-order/success-order.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeEcommerceComponent } from './components/home-ecommerce/home-ecommerce.component';

@NgModule({
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    // Material Design Modules
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  declarations: [
    ProductsComponent,
    ProductComponent,
    CartComponent,
    RegisterOrderComponent,
    ProductDetailsComponent,
    SuccessOrderComponent,
    HomeEcommerceComponent
  ],
})
export class ECommerceModule {}
