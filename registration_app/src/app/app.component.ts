import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

username:string="";
password:string="";
confirmPassword:string="";
gender:string="";
country:string="";
mobileNumber:number=0;
msg:string="";

handleRegButtonClick(){
  this.msg="Registration successfully";
}
}
