import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../classes/Product';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  product: Product = null;
  constructor(private client : HttpClient) { }

  getProduct(): Product{
    return this.product;
  }

  setProduct(p:Product):void{
    this.product = p;
  }

  getProducts() {
    let token:string = "";
    let url:string = "";
    return this.client.get(url,{
      headers: {
        "Authorization": `Bearer {token}`
      }
    })
  }



}
