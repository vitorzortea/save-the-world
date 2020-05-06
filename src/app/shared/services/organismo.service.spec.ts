import { TestBed } from '@angular/core/testing';

import { OrganismoService } from './organismo.service';

describe('OrganismoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganismoService = TestBed.get(OrganismoService);
    expect(service).toBeTruthy();
  });
});
