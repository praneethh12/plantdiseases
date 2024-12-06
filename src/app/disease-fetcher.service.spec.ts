import { TestBed } from '@angular/core/testing';

import { DiseaseFetcherService } from './disease-fetcher.service';

describe('DiseaseFetcherService', () => {
  let service: DiseaseFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiseaseFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
