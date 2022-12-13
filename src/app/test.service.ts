import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  product = "mobile";
  price = 10000;
  color = "black";

  productData =[
    {
      product: "mobile",
      price : 10000,
      color : "black",
    },{
      product: "laptop",
      price : 20000,
      color : "silver",
    }
  ]

  constructor() { }

  increaceprice(){
    this.price++;
  }

  decreaceprice(){
    this.price--;
  }
}
