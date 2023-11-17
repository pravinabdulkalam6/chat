import { TestBed } from '@angular/core/testing';

import { PdftransferService } from './pdftransfer.service';

describe('PdftransferService', () => {
  let service: PdftransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdftransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
