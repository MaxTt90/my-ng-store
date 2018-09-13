import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProductsComponent } from './start-products.component';

describe('StartProductsComponent', () => {
  let component: StartProductsComponent;
  let fixture: ComponentFixture<StartProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
