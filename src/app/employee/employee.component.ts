
import { EmployeeService } from './employees.service';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from './employee.type';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements AfterViewInit {
  employees: Employee[];
  showPanel: boolean = false;
  //buttonLabel : string = "";
  actionId: Array<string> = [];
  dataParent: any;
  recentAction: string;
  constructor(
    private employeesService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'sex', 'status', 'update', 'delete'];

  dataSource = new MatTableDataSource<Employee>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  getEmployees() {

    this.employeesService.getEmployees().subscribe((data: any[]) => {
      console.log(data);
      this.employees = data;
      this.dataSource = new MatTableDataSource<Employee>(this.employees);
      this.dataSource.paginator = this.paginator;

    })


  }
 
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Employee>(this.employees);
    this.dataSource.paginator = this.paginator;
  }
  doAction(action, id) {

    this.actionId[0] = action
    this.actionId[1] = String(id);
    console.log(this.actionId);
    
      if (this.showPanel) {
        this.showPanel = false;
      } else {
        this.showPanel = true;
      }
      this.recentAction = action;
    
  }
  deleteAction(id) {
    alert('Employee #'+ id + ' will be deleted.');
    this.employeesService.deleteEmployee(id).subscribe(data => {
      this.eventFromChild()
    })
  }
  eventFromChild(){
    console.log('parent function');
    this.getEmployees();
    //setTimeout(function(){ this.showPanel = true; }, 2000);
    this.showPanel = false;
  }
}
