import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public _url:string="/assets/Data/employees.json";

  constructor(public http : HttpClient) { }

  getEmployees():Observable <IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
