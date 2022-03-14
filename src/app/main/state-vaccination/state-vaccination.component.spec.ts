import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateVaccinationComponent } from './state-vaccination.component';

describe('StateVaccinationComponent', () => {
  let component: StateVaccinationComponent;
  let fixture: ComponentFixture<StateVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
