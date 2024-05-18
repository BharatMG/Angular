import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleComponent } from './style/style.component';
import { ClazzComponent } from './clazz/clazz.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ForloopComponent } from './forloop/forloop.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    ClazzComponent,
    IfElseComponent,
    ForloopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
