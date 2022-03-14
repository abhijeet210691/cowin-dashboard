import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationByGenderComponent } from './vaccination-by-gender.component';

describe('VaccinationByGenderComponent', () => {
  let component: VaccinationByGenderComponent;
  let fixture: ComponentFixture<VaccinationByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
