import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  viewedItem: Product;

  constructor(private http: HttpClient) { 
    this.viewedItem = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }

  getViewedItem(): Product {
    return this.viewedItem;
  }

  updateViewedItem(product: Product): void {
    this.viewedItem = product;
  }
}
