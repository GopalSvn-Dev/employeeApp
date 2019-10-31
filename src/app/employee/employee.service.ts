import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly rootUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  
  addEmployee(employee) {
    console.log(employee);
    return this.http.post(this.rootUrl+"addEmployee" , employee);
  }

  getAllEmployee(){
    return this.http.get(this.rootUrl+"getAllEmployee");
  }

}
