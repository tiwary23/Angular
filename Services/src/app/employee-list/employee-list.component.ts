import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>employee list</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees=[
    {"id":1, "name":"bhaskar", "age":23},
    {"id":2, "name":"alok", "age":22},
    {"id":3, "name":"vikram", "age":24},
    {"id":4, "name":"abhishek", "age":21}
  ];
  constructor() { }

  ngOnInit() {
  }

}
