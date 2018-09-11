import { NgModule } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule
  ],
  exports: [
    HeroComponent
  ],
  declarations: [HeroComponent, CategoryComponent]
})
export class HomeModule { }
