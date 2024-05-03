import { TestBed } from '@angular/core/testing';

import { GetjokesService } from './getjokes.service';

describe('GetjokesService', () => {
  let service: GetjokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetjokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
