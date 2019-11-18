import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Employee } from '../employee';
import { Category } from '../category';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  
  employee: Observable<Employee>;
  employees: Observable<Employee[]>;
  category: Observable<Category[]>;


  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
    
  }
  reloadData(){
    this.employee=this.employeeService.getEmployeesList();
    this.employees=this.employeeService.getEmployeesList();
    this.category=this.employeeService.getCategoryList();
  }

  onOptionsSelected(value: number){
    console.log("the selected value is"+value);

    if(value==0)
    {
      this.employees=this.employeeService.getEmployeesList();
    }
    else{
      this.employees=this.employeeService.getCategory(value);
    }
    this.category=this.employeeService.getCategoryList();
  }

  employeeDetails(id: number){
    console.log("selected ID: " +id);
    this.router.navigate(['details', id]);
  }

}
