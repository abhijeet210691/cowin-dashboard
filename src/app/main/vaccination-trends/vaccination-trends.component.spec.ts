import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationTrendsComponent } from './vaccination-trends.component';

describe('VaccinationTrendsComponent', () => {
  let component: VaccinationTrendsComponent;
  let fixture: ComponentFixture<VaccinationTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
