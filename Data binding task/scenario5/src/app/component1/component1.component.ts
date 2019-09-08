import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  public message='';
  constructor() { }

  ngOnInit() {
  }
 displaycom1(value){
  console.log("msg from com1",value);
  this.message=value;

 }
}
