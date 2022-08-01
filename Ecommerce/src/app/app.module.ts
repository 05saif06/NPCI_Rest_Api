import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { CatFormComponent } from './components/cat-form/cat-form.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/prod-list.component';
import { ProdFormComponent } from './components/prod-form/prod-form.component';

const routes: Routes =[
  {path: '',component:WelcomeComponent},
  {path: 'products',component:ProductListComponent},
  {path: 'categories',component:CategoryListComponent},
  {path: 'prodform',component:ProdFormComponent},
  {path: 'catform',component:CatFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    WelcomeComponent,
    ProdFormComponent,
    CatFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
