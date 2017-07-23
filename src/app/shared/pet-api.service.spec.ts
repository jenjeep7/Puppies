import { TestBed, inject } from '@angular/core/testing';

import { PetApiService } from './pet-api.service';

describe('PetApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetApiService]
    });
  });

  it('should be created', inject([PetApiService], (service: PetApiService) => {
    expect(service).toBeTruthy();
  }));
});
