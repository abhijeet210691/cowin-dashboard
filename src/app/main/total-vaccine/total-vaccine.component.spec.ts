import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVaccineComponent } from './total-vaccine.component';

describe('TotalVaccineComponent', () => {
  let component: TotalVaccineComponent;
  let fixture: ComponentFixture<TotalVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVaccineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
