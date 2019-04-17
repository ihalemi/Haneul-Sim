import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeRaw } from '../data/employeeRaw';
import { EmployeeService } from '../data/employee.service';
import { PositionService } from '../data/position.service';
import { Position } from '../data/position';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-employee', 
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit, OnDestroy {
    paramSubscription: any;
    employeeSubscription: any;
    getPositionsSubscription: any;
    saveEmployeesSubscription: any;
    employee: EmployeeRaw;
    positions: Position[];
    successMessage = false;
    failMessage = false;

    constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private positionService: PositionService) { }

    ngOnInit() {
        this.paramSubscription = this.route.params.subscribe((params) => {
            this.employeeSubscription = this.employeeService.getEmployee(params['_id']).subscribe((emp) => {
                this.employee = emp[0];

                this.getPositionsSubscription = this.positionService.getPositions().subscribe((data) => {
                    this.positions = data;
                });
            });
        });
    }

    onSubmit(f: NgForm) {
        this.saveEmployeesSubscription = this.employeeService.saveEmployee(this.employee).subscribe(() => {
            this.successMessage = true;
            setTimeout(() => {
                this.successMessage = false;
            }, 2500);
        }, () => {
            this.failMessage = true;
            setTimeout(() => {
                this.failMessage = false;
            }, 2500);
        })
    }

    ngOnDestroy() {
        if(this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }

        if(this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }

        if(this.getPositionsSubscription) {
            this.getPositionsSubscription.unsubscribe();
        }

        if(this.saveEmployeesSubscription) {
            this.saveEmployeesSubscription.unsubscribe();
        }
    }
}