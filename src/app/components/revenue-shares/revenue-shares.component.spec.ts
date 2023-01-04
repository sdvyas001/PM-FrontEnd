import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueSharesComponent } from './revenue-shares.component';

describe('RevenueSharesComponent', () => {
  let component: RevenueSharesComponent;
  let fixture: ComponentFixture<RevenueSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueSharesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
