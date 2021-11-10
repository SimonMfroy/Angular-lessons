import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/Contact';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private ContactService: ContactService) {
  }
  contact: Contact = {name: '', email:'', phone:'', message:''}

  onSubmit(): void {
    this.ContactService.postContacts(this.contact).subscribe();
  }
}