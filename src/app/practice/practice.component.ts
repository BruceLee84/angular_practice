import { Component, Input, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  userName : String = ""
  userDatas=[{
    name:'bala',
    status:'true',
  },{
    name:'raj',
    status:'true'
  },
  {
    name:'aslan',
    status:'false'
  },{
    name:'Bala',
    status:''
  }
  ]

  constructor(public product:TestService) { }

  @Input('child') child : any

  ngOnInit(): void {
  }

  increase(){
    this.product.increaceprice()
  }

  decrease(){
    this.product.decreaceprice()
  }

}
