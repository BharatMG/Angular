import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }
  msg:string="";

  getWelcomeMessage():string{
    this.msg="Welcome to Angular Service Method";
    return this.msg;

  }
}
