import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/Person'
import { Card } from '../../model/Card'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  styles: [".example-card{background: aquamarine}"]
})
export class AboutUsComponent implements OnInit{
  persons: Person[] = [
      {name: 'Miguel', age:25, id:1},
      {name: 'Johnny', age:18, id:2},
      {name: 'Roberto', age:55, id:3},
  ];
  personPicture:string = 'https://media.discordapp.net/attachments/887233346848063554/907606091196669963/bast.jpg'
  data: Card[] = []

  ngOnInit() {
    this.data = this.persons.map((person) => {
      return { title: person.name, subTitle: person.age + ' age', image: this.personPicture, id: person.id}
    })
  }

  onLikeClick(datum:number) {
    console.log(datum);
  }
}
