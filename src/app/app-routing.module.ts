import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent} from './dashboard/dashboard.component'
import { RoutingoptionsComponent} from './routingoptions/routingoptions.component'
import { ViewemployeeComponent} from './employee/viewemployee/viewemployee.component'
import { LoginpageComponent } from './loginpage/loginpage.component';
const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'routing',
    component: RoutingoptionsComponent,
  },
  {
    path: 'viewemployee/:id',
    component: ViewemployeeComponent,
  },
  {
    path: '',
    component:  LoginpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
