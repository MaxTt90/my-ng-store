import { NgModule } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';

import { HeroComponent } from './hero/hero.component';
import { CategoryComponent } from './category/category.component';
import { HotFeatureComponent } from './hot-feature/hot-feature.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { StartProductsComponent } from './start-products/start-products.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageContentComponent } from './main-page/main-page-content/main-page-content.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule,
    MaterialModule
  ],
  exports: [
    HeroComponent,
    CategoryComponent,
    HotFeatureComponent,
    StartProductsComponent,
    MainPageComponent
  ],
  declarations: [
    HeroComponent,
    CategoryComponent,
    HotFeatureComponent,
    StartProductsComponent,
    ProductCardComponent,
    MainPageComponent,
    MainPageContentComponent
  ]
})
export class HomeModule { }
