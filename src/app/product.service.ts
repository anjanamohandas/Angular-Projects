import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl='http://localhost:64523/api';

  constructor(private http:HttpClient) { }

  getProductList():Observable<any>{
    return this.http.get(this.baseUrl+'/Products');
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/Products/'+id);

  } 

  addProduct(pdt: Product){
    return this.http.post(this.baseUrl+'/Products',pdt);
  }

  GetProduct(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/products/'+id)
  }
  
  UpdateProduct(id:number,product:Product){
    return this.http.put(this.baseUrl+'/products/'+id,product)
  }

}
