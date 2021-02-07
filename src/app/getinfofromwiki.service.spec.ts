import { TestBed } from '@angular/core/testing';

import { GetinfofromwikiService } from './getinfofromwiki.service';

describe('GetinfofromwikiService', () => {
  let service: GetinfofromwikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetinfofromwikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
