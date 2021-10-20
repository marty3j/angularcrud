import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeComponent } from '../employee.component';
import { Employee } from '../employee.type';
import { EmployeeService} from '../employees.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private employeesService: EmployeeService) { }
    employees : Employee;
  userId : string;
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("id");
    console.log(this.userId);
    this.employeesService.getEmployee(this.userId).subscribe(data => {
      console.log(data);
      this.employees = data;
     

    })
  }

}
