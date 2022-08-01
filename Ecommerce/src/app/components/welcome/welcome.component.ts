import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route:Router) { }

  showProduct(){
    this.route.navigateByUrl("/products")
  }

  showCategory(){
    this.route.navigateByUrl("/categories")
  }

  ngOnInit(): void {
  }

}
