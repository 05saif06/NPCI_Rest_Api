import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { ProductManagementServiceService } from 'src/app/services/product-management-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories : Category[]
  constructor(private service : ProductManagementServiceService, private route:Router) { }

  ngOnInit(): void {
    this.listOfCategories();
  }

  addCategory(){
    this.route.navigateByUrl("/catform");
  }

  listOfCategories(){
    this.service.getAllCategory().subscribe(data =>{
      console.log(data);
      this.categories = data;
    }
    )
  }
}
