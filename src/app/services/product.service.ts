import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor (private http: HttpClient) {

  }
  get(id:number): Observable<Product> {
      return this.http.get<Product>(environment.API.baseUrl + environment.API.endpoint.product + '/'+id);
  }

  getProducts():Observable<Product[]> {
      //return of([]); // Of() Simuler un observable si pas de service http -> dev only
    return this.http.get<Product[]>(environment.API.baseUrl + environment.API.endpoint.product);
  }
}
