import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpPlaygroundComponent } from './http-playground/http-playground.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { ComponentPlaygroundComponent } from './component-playground/component-playground.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HttpPlaygroundComponent,
    RxjsPlaygroundComponent,
    ComponentPlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
