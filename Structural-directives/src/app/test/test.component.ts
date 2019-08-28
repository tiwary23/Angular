import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Welcome
  </h2>
  <div *ngIf="displayName; then thenBlock; else elseBlock">
  </div>
  <ng-template #thenBlock>
  <h2>Deepak
  </h2>
  </ng-template>
  <ng-template #elseBlock>
  <h2>name is hidden
  </h2>
  </ng-template>
  
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = true ;
  constructor() { }

  ngOnInit() {
  }

}
