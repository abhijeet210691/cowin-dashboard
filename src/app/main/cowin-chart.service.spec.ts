import { TestBed } from '@angular/core/testing';

import { CowinChartService } from './cowin-chart.service';

describe('CowinChartService', () => {
  let service: CowinChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CowinChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
