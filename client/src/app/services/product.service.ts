import { Product } from "./../models/product";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseURL = "http://localhost:1234";

  constructor(private http: HttpClient) {}

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/produto/listar`);
  }
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseURL}/produto/cadastrar`, product);
  }
}
