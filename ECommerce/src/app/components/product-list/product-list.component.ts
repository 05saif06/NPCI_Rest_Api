import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products : Product[];
  constructor(private service : ProductServiceService) { }

  ngOnInit(): void {
    this.listOfProducts()
  }

  listOfProducts(){
    this.service.getAllProduct().subscribe(data=>{
      console.log(data)
      this.products = data;
    })
  }

}
