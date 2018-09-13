import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotFeatureComponent } from './hot-feature.component';

describe('HotFeatureComponent', () => {
  let component: HotFeatureComponent;
  let fixture: ComponentFixture<HotFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
