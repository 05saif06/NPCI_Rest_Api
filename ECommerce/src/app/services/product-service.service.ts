import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { Category } from '../common/product-category';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  producturl = "http://localhost:8080/api/product"
  categoryurl = "http://localhost:8080/api/category"

  constructor(private httpClient : HttpClient) { }

  getAllProduct() : Observable<Product[]>{
    console.log(this.httpClient.get<getProductResponse>(this.producturl).pipe(map(response =>  response._embedded.products)));
    return this.httpClient.get<getProductResponse>(this.producturl).pipe(map(response =>  response._embedded.products));
  }
  getAllCategory() : Observable<Category[]>{
    console.log(this.httpClient.get<getCategoryResponse>(this.categoryurl).pipe(map(response =>  response._embedded.category)));
    return this.httpClient.get<getCategoryResponse>(this.categoryurl).pipe(map(response =>  response._embedded.category));
  }
}


interface getProductResponse{
  _embedded : {
    products : Product[]
  }
}


interface getCategoryResponse{
  _embedded : {
    category : Category[]
  }
}
