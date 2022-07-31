import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
const routes : Routes=[
  {path:'',component:WelcomeComponent},
  {path:'employees',component:EmpListComponent},
  {path:'departments',component:DeptListComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
