import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  fullName: string = '';
  amountDue: string = '';

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.fullName = this.cartService.getFullname();
    this.amountDue = this.cartService.getAmountDue();
  }
}
