import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { ListsComponent } from './lists/lists.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { IPDetailsComponent } from './ipdetails/ipdetails.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'basicInfo',component:BasicinfoComponent},
  {path:'employeeList',component:ListsComponent},
  {path:'Team',component:TeamComponent},
  {path:'project',component:ProjectComponent},
  {path:'ipDetails',component:IPDetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
