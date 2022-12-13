import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'myApp';
   
  parent =[
    {
      name:"vikram",
      role:"squad_commander",
      year:"1987"
    },
    {
      name:"Uppiliappan",
      role:"Communications_specialist",
      year:"1987"
    },{
      name:"Lawrence",
      role:"Weapons_specialist",
      year:"1987"
    }

  ]
    
}
