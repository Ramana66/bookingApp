/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeatingService } from './seating.service';

describe('SeatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeatingService]
    });
  });

  it('should ...', inject([SeatingService], (service: SeatingService) => {
    expect(service).toBeTruthy();
  }));
});
