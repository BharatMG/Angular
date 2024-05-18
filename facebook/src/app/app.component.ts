import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // title = 'facebook';

  id:number=1;
  name:string="maya";
  age:number=11;

  changeData(){
    this.id=100;
    this.name="gagan";
    this.age=19;
  }
}
