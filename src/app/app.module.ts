import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponent } from './home-component/home-component';
import { EmployeesComponent } from './employees-component/employees-component';
import { PositionsComponent } from './positions-component/positions-component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';
import { PositionService } from './data/position.service';
import { EmployeeService } from './data/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee-component/employee.component';
import { PositionComponent } from './position-component/position.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    ContentComponentComponent,
    FooterComponentComponent,
    HomeComponent,
    EmployeesComponent,
    PositionsComponent,
    PageNotFoundComponent,
    EmployeeComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [PositionService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
