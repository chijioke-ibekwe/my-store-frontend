import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges{
  cartItems: CartItem[] = [];
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  amountDue: string = '0';

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.amountDue = this.getCartItemsCost(this.cartItems).toFixed(2);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.amountDue = this.getCartItemsCost(this.cartItems).toFixed(2);
  }

  quantityChange(cartItem: CartItem): void {
    if(cartItem.quantity < 1) {
      alert("Removed from cart");
      this.cartService.removeFromCart(cartItem);
      this.cartItems = this.cartItems.filter(item => item.id != cartItem.id);
    }

    this.amountDue = this.getCartItemsCost(this.cartItems).toFixed(2);
  }

  submitForm(){
    this.cartService.setOrderSummary(this.fullName, this.amountDue);
    this.cartService.emptyCart();
    this.cartItems = [];
    this.router.navigate(['confirmation'], { relativeTo: this.route });
  }

  private getCartItemsCost(cartItems: CartItem[]): number {
    let sum: number = 0;

    cartItems.forEach((item) => {
      const itemCost = item.price * item.quantity;
      sum += itemCost;
    })

    return sum;
  }
  
}
