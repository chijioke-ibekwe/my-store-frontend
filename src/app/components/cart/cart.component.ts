import { Component, OnChanges, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  quantityChange(cartItem: CartItem): void {
    alert(`Quantity changed to ${cartItem.quantity}`);
  }
}
