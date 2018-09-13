import { NgModule } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { CategoryComponent } from './category/category.component';
import { HotFeatureComponent } from './hot-feature/hot-feature.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule
  ],
  exports: [
    HeroComponent,
    CategoryComponent,
    HotFeatureComponent
  ],
  declarations: [HeroComponent, CategoryComponent, HotFeatureComponent]
})
export class HomeModule { }
