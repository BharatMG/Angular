import { Component, Inject } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-app';

  WelcomeMsg:string="";
  constructor(@Inject(WelcomeService) private s:WelcomeService){}

    getMsg(){
this.WelcomeMsg=this.s.getWelcomeMessage();
    }
  }

