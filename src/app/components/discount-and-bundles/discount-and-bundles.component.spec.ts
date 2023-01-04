import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountAndBundlesComponent } from './discount-and-bundles.component';

describe('DiscountAndBundlesComponent', () => {
  let component: DiscountAndBundlesComponent;
  let fixture: ComponentFixture<DiscountAndBundlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountAndBundlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountAndBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
