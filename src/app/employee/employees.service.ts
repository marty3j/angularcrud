import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Employee } from './employee.type';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'    
  })
};

@Injectable()
export class EmployeeService {
  url = 'http://localhost:3000/employees';  // URL to web api
  //private handleError: HandleError;

  constructor(
    private http: HttpClient) {
    // httpErrorHandler: HttpErrorHandler) {
    // this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  // public sendGetRequest(){
  //   return this.http.get('http://localhost:3000/employees');
  // }

  // getHeroes (): Observable<any[]> {
  //   return this.http.get<any>('http://localhost:3000/employees')
  //     .pipe(
  //       //catchError(this.handleError('getHeroes', []))
  //     );
  // }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employees')
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
  }
  addEmployee (hero: any): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:3000/employees', hero, httpOptions)
    .pipe(
      map((response) => {
        return response;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>('http://localhost:3000/employees/' + id)
    .pipe(
      map((response) => {
        return response;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
  updateEmployee(id, employee): Observable<Employee> {
    console.log('service=', id, employee);
    return this.http.put<Employee>('http://localhost:3000/employees/' + id, employee)
    .pipe(
      map((response) => {
        //console.log('response=', response);
        return response;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
  deleteEmployee(id){
    return this.http.delete<Employee>('http://localhost:3000/employees/' + id)
    .pipe(
      map((response) => {
        //console.log('response=', response);
        return response;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
    }
}