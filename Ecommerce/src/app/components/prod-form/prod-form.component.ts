import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductManagementServiceService } from 'src/app/services/product-management-service.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {

  product: Product = new Product(0,"","","",0,"",0,new Date(),new Date(),0);

  constructor(private prodService: ProductManagementServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.prodService.saveProduct(this.product).subscribe(data =>{
      console.log(this.product);
      this.route.navigateByUrl("/products")
    });
    
  }
}
