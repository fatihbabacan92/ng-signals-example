import { Component, OnInit, effect, inject } from '@angular/core';

import { LibraryService } from '../../shared/services/library.service';
import { GhibliApiService } from '../../shared/api/ghibli-api.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  imports: [],
})
export class DiscoverComponent implements OnInit {
  public readonly ghibliApi = inject(GhibliApiService);
  public readonly library = inject(LibraryService);

  public logFilms = effect(() => {
    console.log('Number of films:', this.ghibliApi.films().length);
  });

  public ngOnInit(): void {
    if (!this.ghibliApi.films().length) {
      this.ghibliApi.loadFilms();
    }
  }
}
