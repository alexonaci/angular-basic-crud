import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentPlaygroundComponent } from './component-playground/component-playground.component';
import { HttpPlaygroundComponent } from './http-playground/http-playground.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';

const routes: Routes = [
  { path: '',  redirectTo: 'component-playground', pathMatch: 'full'},
  { path: 'component-playground', component: ComponentPlaygroundComponent},
  { path: 'http-playground', component: HttpPlaygroundComponent},
  { path: 'rxjs-playground', component: RxjsPlaygroundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
