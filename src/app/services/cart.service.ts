import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  fullName: string = '';
  amountDue: string = '';

  constructor() { }

  addToCart(cartItem: CartItem): void {
    this.cartItems.unshift(cartItem);
  }

  emptyCart(): void {
    this.cartItems = [];
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getFullname(): string {
    return this.fullName;
  }

  getAmountDue(): string {
    return this.amountDue;
  }

  removeFromCart(cartItem: CartItem): void{
    this.cartItems = this.cartItems.filter(item => item.id != cartItem.id);
  }

  setOrderSummary(fullName: string, amountDue: string): void {
    this.fullName = fullName;
    this.amountDue = amountDue;
    console
  }
}
