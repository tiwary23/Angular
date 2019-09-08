import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Output() displayParent= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  display(value){
    console.log("msg from comp 3",value);
    this.displayParent.emit(value);
  }
}
