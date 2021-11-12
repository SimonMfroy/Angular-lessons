import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../model/Card'
import { Panier } from '../../model/Panier'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  @Input() data: Card[];
  @Output() likeClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() cardClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() addClick: EventEmitter<Card> = new EventEmitter<Card>();

  constructor() {
    this.data = [];
  }

  onLikeClick(datum:number){
    this.likeClick.emit(datum);
  }

  onAddClick(datum:Card){
    this.addClick.emit(datum);
  }

  onCardClick(datum:number){
    this.cardClick.emit(datum);
  }

  /*ngOnInit() {
    this.displayData = this.data.map((datum)=> {
      let cardData:Card = {title: '', subTitle: '', image: ''};
      cardData.title = datum.name;

      if(datum.hasOwnProperty('price')) {
        datum = <Product>datum; // Assignation du type Product (caster) cf l-13 data:(Person ou Product)
        cardData.subTitle = datum.price + ' €';
        cardData.image = datum.picture;
      } else {
        datum = <Person>datum;
        cardData.subTitle = datum.age + ' ans';
        cardData.image = this.personPicture;
      }
      return cardData;
    })
  }*/

}
