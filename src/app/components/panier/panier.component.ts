import { Component, OnInit } from '@angular/core';
import { Card } from '../../model/Card';
import { Panier } from '../../model/Panier';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  myArray: Panier[] = [];

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('monpanier') !== 'null') {
      let myobj= JSON.parse(localStorage.getItem('monpanier') || 'string');

      myobj.map((product: Card) => {
        if(product.quantity){
          this.myArray.push({ id: product.id, price: parseFloat(product.subTitle), name: product.title, totalPrice: parseFloat(product.subTitle) * product.quantity, quantity: product.quantity})
        }
     })
    }
  }
}
