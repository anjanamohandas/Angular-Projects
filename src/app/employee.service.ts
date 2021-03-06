import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl='http://localhost:64523/api';

  constructor(private http: HttpClient) { }

getEmployeesList():Observable<any>{
  return this.http.get(this.baseUrl+'/Employee')
}

getCategoryList():Observable<any>{
  return this.http.get(this.baseUrl+'/Category')
}

getCategory(id: number):Observable<any>{
  return this.http.get(this.baseUrl+'/Category/'+id)
}

getEmployee(id: number):Observable<any>{
  return this.http.get(this.baseUrl+'/Employee/'+id)
}

}
