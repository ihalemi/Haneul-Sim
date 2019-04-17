import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employees',
  templateUrl: './employees-component.html',
  styleUrls: ['./employees-component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean;
  filteredEmployees: Employee[];

  constructor(private service: EmployeeService, private router: Router) { 
    this.loadingError = false;  
  }

  routeEmployee(id: String) {
    this.router.navigate(["/employee", id]);
  }

  ngOnInit() {
    this.getEmployeesSub = this.service.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.filteredEmployees = employees;
    }, () => {
      this.loadingError = true;
    });
  }

  onEmployeeSearchKeyUp(event: any) {
    let substring : string = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((e) => ((e.FirstName.toLowerCase().indexOf(substring) !== -1 ) || (e.LastName.toLowerCase().indexOf(substring) !== -1)));
  }

  ngOnDestroy() {
    if(this.getEmployeesSub) {
      this.getEmployeesSub.unsubscribe();
    }
  }

}
