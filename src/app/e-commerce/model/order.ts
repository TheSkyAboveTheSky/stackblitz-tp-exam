import { ProductCart } from './product-cart';
import { ProductOrder } from './product-order';
import { UserInfo } from './user-info';

export interface Order {
  cart: ProductOrder;
  userInfo: UserInfo;
}
