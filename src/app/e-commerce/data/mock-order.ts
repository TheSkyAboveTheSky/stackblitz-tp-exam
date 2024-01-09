import { Order } from '../model/order';

export const mockOrder: Order = {
  userInfo: {
    firstName: 'Mister',
    lastName: 'Jack',
    email: 'mrJack@gmail.fr',
    phoneNumber: '0606060606',
    adress: '9 Bd Saint Jean',
  },
  cart: { products: [{ id: '1', quantity: 2 }], total: 20 },
};
