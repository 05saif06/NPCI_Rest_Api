import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from '../commom/department';
import { Employee } from '../commom/employee';


@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {
   empurl = "http://localhost:8080/api/emp"
   depturl = "http://localhost:8080/api/dept"
  constructor(private httpClient : HttpClient) { }

  getAllEmployee() : Observable<Employee[]>{
    console.log(this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees)));
    return this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees ));
  }


  getAllDepartment() : Observable<Department[]>{
    console.log(this.httpClient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments)));
    return this.httpClient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments));
  }






}

interface getEmployeeResponse{
  _embedded : {
    employees : Employee[]
  }
}

interface getDepartmentResponse{
  _embedded : {
    departments : Department[]
  }
}
