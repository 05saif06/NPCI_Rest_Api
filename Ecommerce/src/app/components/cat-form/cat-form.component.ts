import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

  category: Category = new Category(0,"");

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.category);
  }
}
