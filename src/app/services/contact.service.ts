import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from '../model/Contact';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor (private http: HttpClient) {
  }

  postContacts(contact: Contact):Observable<Object> {
    
    //return of([]); // Of() Simuler un observable si pas de service http -> dev only
    return this.http.post<Contact[]>(environment.API.baseUrl + environment.API.endpoint.contact,  contact);
  }
}
