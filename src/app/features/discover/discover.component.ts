import { Component, OnInit, effect } from '@angular/core';

import { LibraryService } from '../../shared/services/library.service';
import { GhibliApiService } from '../../shared/api/ghibli-api.service';

@Component({
  selector: 'app-discover',
  standalone: true,
  templateUrl: './discover.component.html',
  imports: [],
})
export class DiscoverComponent implements OnInit {
  logFilms = effect(() => {
    console.log('Number of films:', this.ghibliApi.films().length);
  });

  constructor(public ghibliApi: GhibliApiService, public library: LibraryService) {}

  ngOnInit() {
    if (!this.ghibliApi.films().length) {
      this.ghibliApi.loadFilms();
    }
  }
}
