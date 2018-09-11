import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  images: Image[];

  constructor() {
    this.images = [
      { name: '1', imageUrl: '../../../assets/home_hero1.png', description: 'This is the phone.' },
      { name: '2', imageUrl: '../../../assets/home_hero2.png', description: 'This is the new release.' },
      { name: '3', imageUrl: '../../../assets/home_hero1.png', description: '' }];
  }

  ngOnInit() {
  }

}
