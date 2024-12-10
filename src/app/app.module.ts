import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { TeamComponent } from './team/team.component';
import { ListsComponent } from './lists/lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { IPDetailsComponent } from './ipdetails/ipdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BasicinfoComponent,
    TeamComponent,
    ListsComponent,
    HomeComponent,
    ProjectComponent,
    IPDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
