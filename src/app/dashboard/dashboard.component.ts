import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee/employees.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees = [];
  constructor(private employeesService: EmployeeService) { }

  ngOnInit(): void {
    
    this.getEmployees();
  }
  getEmployees(): void {

    this.employeesService.getEmployees().subscribe((data: any[]) => {
      console.log(data);
      this.employees = data;
      

    })


  }

}
