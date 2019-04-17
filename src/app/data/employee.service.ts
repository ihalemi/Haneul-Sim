import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeRaw } from './employeeRaw';

@Injectable()

export class EmployeeService {
  url = "https://quiet-crag-62906.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url+ "employees")
  }

  saveEmployee(employee: EmployeeRaw) : Observable<any> {
    return this.http.put<any>(this.url+ "employee/" +employee._id, employee);
  }

  getEmployee(id: number) : Observable<EmployeeRaw[]> {
    return this.http.get<EmployeeRaw[]>(this.url+ "employee-raw/" +id);
  }
}
