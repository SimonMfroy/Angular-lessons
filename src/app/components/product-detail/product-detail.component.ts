import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product'
import { Card } from '../../model/Card';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  data: Card[] = []
  product: Product = {id: 0, name:'', price:0, picture:'', stock:0}

  constructor(private route: ActivatedRoute, private productService:ProductService) {
  }

  ngOnInit(): void {
    let productId = this.route.snapshot.params['id'];
    this.productService.get(productId).subscribe((product:Product) => {
      this.product = product;
    })
  }

}
