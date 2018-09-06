import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <button mat-button [matMenuTriggerFor]="menu">{{category.name}}</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>Item 1</button>
      </mat-menu>
    </div>
  `,
  styles: []
})
export class MenuComponent implements OnInit {

  @Input() category: Category;

  constructor() {}

  ngOnInit() {
  }

}
