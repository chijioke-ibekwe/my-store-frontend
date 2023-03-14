import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  numberOfCartItems: Subject<number> = new Subject();
  fullName: string = '';
  amountDue: string = '';

  constructor() { }

  addToCart(cartItem: CartItem): void {
    let existingItems: CartItem[] = this.cartItems.filter(item => item.id === cartItem.id);

    if(existingItems.length != 0) {
      const index = this.cartItems.indexOf(existingItems[0]);

      this.cartItems.splice(index, 1, cartItem);
    } else {
      this.cartItems.unshift(cartItem);
    }

    this.numberOfCartItems.next(this.cartItems.length);
  }

  emptyCart(): void {
    this.cartItems = [];
    this.numberOfCartItems.next(this.cartItems.length);
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
  }
}
