import { NgModule } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { CategoryComponent } from './category/category.component';
import { HotFeatureComponent } from './hot-feature/hot-feature.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { StartProductsComponent } from './start-products/start-products.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule
  ],
  exports: [
    HeroComponent,
    CategoryComponent,
    HotFeatureComponent,
    StartProductsComponent
  ],
  declarations: [HeroComponent, CategoryComponent, HotFeatureComponent, StartProductsComponent]
})
export class HomeModule { }
