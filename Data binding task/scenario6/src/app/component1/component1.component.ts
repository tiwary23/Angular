import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  public message13;
  constructor() { }

  ngOnInit() {
  }
  display13(value){
    console.log("msg from 1",value)
    this.message13=value;
  }
}
