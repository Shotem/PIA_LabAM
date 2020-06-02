import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private client : HttpClient) { }

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
