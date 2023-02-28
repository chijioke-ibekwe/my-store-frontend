import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{
  productItem: Product;
  quantity: number = 1;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.productItem = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
    this.productItem = this.productService.getViewedItem();
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

    alert("Added to cart!");
  }
}
