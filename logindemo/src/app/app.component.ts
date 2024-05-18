import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  userName:string="";
  password:string="";
  msg:string="";

  checkLogin(){
    if(this.userName=="admin" && this.password=="admin123"){
      this.msg="valid credentials";
    } else {
      this.msg="invalid !!!";
    }
  }


}
