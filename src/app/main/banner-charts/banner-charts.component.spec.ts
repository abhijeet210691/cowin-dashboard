import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerChartsComponent } from './banner-charts.component';

describe('BannerChartsComponent', () => {
  let component: BannerChartsComponent;
  let fixture: ComponentFixture<BannerChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
