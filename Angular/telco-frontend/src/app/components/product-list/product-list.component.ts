import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: string[] = [];
  productName:string=""

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    return this.getProducts
  }
  addProducts(productName: string) {
    this.products.push(productName);
  }
//   deleteProduct(productName: string) {
//     this.products = this.products.filter(c => c !== productName);
//  }

// }
