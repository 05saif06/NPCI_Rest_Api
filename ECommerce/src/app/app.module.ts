import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryListComponent } from './components/product-category-list/product-category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes,RouterModule } from '@angular/router';
const routes : Routes=[
  {path:'',component:WelcomeComponent},
  {path:'products',component:ProductListComponent},
  {path:'category',component:ProductCategoryListComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryListComponent,
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
