import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  marks:number=80;
  status:boolean=false;

  constructor(){
    if(this.marks>40){
      this.status=true;
    }else{
      this.status=true;
    }
  }

}
