import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return[
    {"id":1, "name":"bhaskar", "age":23},
    {"id":2, "name":"alok", "age":22},
    {"id":3, "name":"vikram", "age":24},
    {"id":4, "name":"abhishek", "age":21}
  ];
  }
}
