import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AefiReportComponent } from './aefi-report.component';

describe('AefiReportComponent', () => {
  let component: AefiReportComponent;
  let fixture: ComponentFixture<AefiReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AefiReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AefiReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
