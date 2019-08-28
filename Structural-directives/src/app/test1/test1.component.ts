import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'" >your color is red</div>
  <div *ngSwitchCase="'yellow'" >your color is yelow</div>
  <div *ngSwitchCase="'blue'" >your color is blue</div>
  <div *ngSwtichDefault>pick again</div>
  </div>
  
  `,
  styles: []
})
export class Test1Component implements OnInit {

  public color="red";
  constructor() { }

  ngOnInit() {
  }

}
