import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentPlaygroundComponent } from './component-playground/component-playground.component';
import { HttpPlaygroundComponent } from './http-playground/http-playground.component';

const routes: Routes = [
  { path: '',  redirectTo: 'component-playground', pathMatch: 'full'},
  { path: 'component-playground', component: ComponentPlaygroundComponent},
  { path: 'http-playground', component: HttpPlaygroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
