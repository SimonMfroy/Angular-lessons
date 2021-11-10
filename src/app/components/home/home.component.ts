import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product'
import { Card } from '../../model/Card';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  data: Card[] = []

  constructor(private productService: ProductService) {
  }

  onLikeClick(datum:number) {
    console.log(datum);
  }

  ngOnInit() {
    
    this.productService.getProducts().subscribe((products: Product[]) => {
      
      this.data = products.map((product) => {
        return { title: product.name, subTitle: product.price + ' €', image: product.picture, id: product.id}
      })

    });
  }
}
