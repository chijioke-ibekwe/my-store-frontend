import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() addedToCart: EventEmitter<number> = new EventEmitter();
  validQuantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity: number = 1;

  constructor(private cartService: CartService, private productService: ProductService, 
    private router: Router, private route: ActivatedRoute) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  addToCart(product: Product): void {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      quantity: this.quantity
    }

    this.cartService.addToCart(cartItem);
    this.quantity = 1;

    const num: number = this.cartService.countCartItems();
    this.addedToCart.emit(num);

    alert("Added to cart!");
  }

  navigateToProductDetails(product: Product){
    this.productService.updateViewedItem(product);
    this.router.navigate([`${product.id}`], { relativeTo: this.route });
  }
}
