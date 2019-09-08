import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  
  public message32='';
  @Output() displaygrandparent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  displaycom2(value){
    console.log("msg from comp 2",value);
    this.message32=value;
    this.displaygrandparent.emit(value);
  }
}
