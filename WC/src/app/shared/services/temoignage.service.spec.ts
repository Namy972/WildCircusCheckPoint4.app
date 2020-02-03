import { TestBed } from '@angular/core/testing';

import { TemoignageService } from './temoignage.service';

describe('TemoignageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemoignageService = TestBed.get(TemoignageService);
    expect(service).toBeTruthy();
  });
});
