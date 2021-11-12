import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*if(localStorage.getItem('monpanier') === 'null') {
      localStorage.setItem('monpanier', JSON.stringify(this.panier));
    }
    else{
      let myobj = JSON.parse(localStorage.getItem('monpanier') || 'string');
      myobj.push(datum);
      localStorage.setItem('monpanier',JSON.stringify(myobj));
    }*/
  }

}
