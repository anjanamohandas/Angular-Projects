import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';


 //const routes: Routes = [
 // {path:'',redirectTo:'employees',pathMatch:'full'},
  //{path:'employees', component: EmployeeListComponent},
 // {path:'add', component: CreateEmployeeComponent},
 // {path:'update/:id', component: UpdateEmployeeComponent},
 // {path:'details/:id', component: EmployeeDetailsComponent},
 //];
 const routes: Routes = [
   
  {path:'create', component: ProductAddComponent},
  {path:'edit/:id',component:ProductEditComponent},
  {path:'products',component:ProductGetComponent}

 ];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
