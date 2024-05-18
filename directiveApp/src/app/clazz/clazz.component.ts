import { Component } from '@angular/core';
import { Employe } from '../employe';

@Component({
  selector: 'app-clazz',
  templateUrl: './clazz.component.html',
  styleUrl: './clazz.component.css'
})
export class ClazzComponent {

  marks:number=20;
  myClass:string="";

  constructor(){
    if(this.marks>35){
      this.myClass="SectionA";
    }else{
      this.myClass="SectionB";
    }
  }

emps:Employe[]=[
  new Employe(1,"sharan",30000),
  new Employe(2,"manju",80000),
  new Employe(3,"basu",45000)
];  

}
