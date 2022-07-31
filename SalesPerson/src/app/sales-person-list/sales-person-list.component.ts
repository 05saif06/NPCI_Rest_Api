import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  salesPersonList:SalesPerson[] = [
    new SalesPerson("Mohd","Saif","saifm0395@gmail.com",60000,4000),
    new SalesPerson("Ankur","Rai","ankur123@gmail.com",45000,2500),
    new SalesPerson("Ram","Tiwari","ram234@gmail.com",22578,4000),
    new SalesPerson("Sujit","Matty","sujit3463@gmail.com",12000,1000)
  ]
  formModel : SalesPerson = new SalesPerson("","","",0,0)

  ngOnInit(): void {
    console.log(this.formModel)
  }

  onSubmit() : void{
    this.salesPersonList.push(this.formModel)
  }

}
