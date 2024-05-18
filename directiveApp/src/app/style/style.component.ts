import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrl: './style.component.css'
})
export class StyleComponent {

  marks:number=20;
  myColor:string="";

  constructor(){
    if(this.marks >35){
      this.myColor="green";
    }else{
      this.myColor="red";
    }
  }
}
