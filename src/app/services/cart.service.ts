import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() { }

  addToCart(cartItem: CartItem): void {
    this.cartItems.unshift(cartItem);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
}
