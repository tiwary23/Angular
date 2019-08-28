import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Welcome
  </h2>
  <h2 *ngIf="displayName; else elseBlock">
  Deepak
  </h2>
  <ng-template #elseBlock>
  <h2>
  name is hidden
  </h2>
  </ng-template>
  
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = false ;
  constructor() { }

  ngOnInit() {
  }

}
