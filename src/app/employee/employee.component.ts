import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList: any;
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  OnSubmit(form) {
    console.log(form);
      this.employeeService.addEmployee(form).subscribe(data => {
        alert("Employee details added successfully");
        this.getAllEmployee();
      });
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employeeList = data;
    });
  }

}
