import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/product-category';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {
  category: Category[];
  constructor(private service : ProductServiceService) { }

  ngOnInit(): void {
    this.listOfCategory()
  }

  listOfCategory(){
    this.service.getAllCategory().subscribe(data=>{
      console.log(data)
      this.category = data;
    })

}
}