import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  noOfCartItems: number = 0;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    })
    this.noOfCartItems = this.cartService.getCartItems().length;
  }

  increaseNumberOfCartItems(num: number): void {
    this.noOfCartItems = num;
  }

}
