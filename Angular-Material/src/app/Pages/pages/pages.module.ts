import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { ContactComponent } from '../Components/contact/contact.component';
export const routes:Routes=[
 { path:''
 ,children:[{
  path:'',
  redirectTo:'dashboard',
  pathMatch:'full',
 },
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'contact',
  component:ContactComponent
}]
}
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
