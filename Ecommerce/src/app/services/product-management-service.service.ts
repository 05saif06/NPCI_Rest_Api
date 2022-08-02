import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../common/category';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementServiceService {

  productUrl = "http://localhost:8080/api/product";
  categoryUrl = "http://localhost:8080/api/category";

  constructor(private httpClient : HttpClient) { }

  getAllProduct() : Observable<Product[]>{

    console.log(this.httpClient.get<getProductResponse>(this.productUrl).pipe(map(response => response._embedded.products)));
    return this.httpClient.get<getProductResponse>(this.productUrl).pipe(map(response => response._embedded.products));
  }

  getAllCategory() : Observable<Category[]>{

    console.log(this.httpClient.get<getCategoryResponse>(this.categoryUrl).pipe(map(response => response._embedded.categories)));
    return this.httpClient.get<getCategoryResponse>(this.categoryUrl).pipe(map(response => response._embedded.categories));
  }

  saveProduct(product: Product){
    console.log(product)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-origin': '*'
      })
    };
    return this.httpClient.post<Product>(this.productUrl,product,httpOptions)
  }
  saveCategory(category: Category){
    console.log(category)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-origin': '*'
      })
    };
    return this.httpClient.post<Category>(this.categoryUrl,category,httpOptions)
  }
}

interface getProductResponse{
  _embedded : {
    products : Product[];
  }
}

interface getCategoryResponse{
  _embedded : {
    categories : Category[];
  }
}
