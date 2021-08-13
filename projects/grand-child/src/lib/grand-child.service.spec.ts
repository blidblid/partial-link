import { TestBed } from '@angular/core/testing';

import { GrandChildService } from './grand-child.service';

describe('GrandChildService', () => {
  let service: GrandChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrandChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
