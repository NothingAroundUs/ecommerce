import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  URL:string = "https://ecommerce.routemisr.com/api/v1/products"

  constructor(private http: HttpClient) {}

  getProducts():Observable<any>{
    return this.http.get<any>(this.URL);
  }
}
