import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product'
import { Card } from '../../model/Card';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  data: Card[] = [{ title: '', subTitle:'', image:'', id:0 }]
  product: Product = {id: 0, name:'', price:0, picture:'', stock:0}
  panier: Card[] = localStorage.getItem('monpanier') === 'null' ?
    (JSON.parse(localStorage.getItem('monpanier') || 'string')) : ([]);
  constructor(private route: ActivatedRoute, private productService:ProductService) {
  }

  onAddClick(datum:Card) {

    this.panier.push(datum);
    if(localStorage.getItem('monpanier') === null) {
      datum.quantity = 1;
      localStorage.setItem('monpanier', JSON.stringify(this.panier));
    }
    else{
      let myobj = JSON.parse(localStorage.getItem('monpanier') || 'string');
      let find:boolean = false;
      myobj.forEach((element:any) => {
        if(element.id == datum.id){
          find = true;
          console.log(element.quantity, 'test');
          if(element.quantity !== undefined){
            element.quantity = element.quantity +1;
          }
        }
      })
      if(!find){
        datum.quantity = 1;
        myobj.push(datum);
      }
      localStorage.setItem('monpanier',JSON.stringify(myobj));
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('monpanier') === null){
      this.panier = [];
    }
    let productId = this.route.snapshot.params['id'];
    this.productService.get(productId).subscribe((product:Product) => {
      this.product = product;
      return this.data = [{ title: product.name, subTitle: product.price + ' €', image: product.picture, id: product.id}]
    })
  }

}
