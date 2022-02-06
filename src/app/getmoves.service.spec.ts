import { TestBed } from '@angular/core/testing';

import { GetmovesService } from './getmoves.service';

describe('GetmovesService', () => {
  let service: GetmovesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmovesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
