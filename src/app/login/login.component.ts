import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    name:"bala",
    password : "1234"
  }

  users =[
    {
      Name : "bala",
      status:"active"
    },
    {
      Name:"raj",
      status:"active"
    }
  ]


  typeuser = {
    name:"",
    password : ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
