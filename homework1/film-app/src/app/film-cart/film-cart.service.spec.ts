import { TestBed, inject } from '@angular/core/testing';

import { FilmCartService } from './film-cart.service';

describe('FilmCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmCartService]
    });
  });

  it('should ...', inject([FilmCartService], (service: FilmCartService) => {
    expect(service).toBeTruthy();
  }));
});
