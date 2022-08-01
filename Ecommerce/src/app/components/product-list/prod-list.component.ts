import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductManagementServiceService } from 'src/app/services/product-management-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]
  constructor(private service : ProductManagementServiceService,
              private route:Router,
              private activeRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => {
      this.listOfProducts()
    }

    );
  }

  addProd(){
    this.route.navigateByUrl("/prodform")
  }

  listOfProducts(){
    this.service.getAllProduct().subscribe(data =>{
      console.log(data);
      this.products = data
    }
    )
  }
}
