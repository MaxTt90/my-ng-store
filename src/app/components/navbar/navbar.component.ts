import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: Category[];
  myControl = new FormControl();
  options = ['温度传感器', '湿度传感器', '气象站', '小学科学'];

  constructor() {
    this.categories = [
      {name: '小学'},
      {name: '初中'},
      {name: '高中'},
      {name: '物理'},
      {name: '化学'},
      {name: '传感器'}
    ];
  }

  ngOnInit() {
  }

}
