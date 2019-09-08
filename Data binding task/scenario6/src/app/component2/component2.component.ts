import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() displayparent21=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 display21(value){
   console.log("msg from 2",value);
   this.displayparent21.emit(value);

 }
}
