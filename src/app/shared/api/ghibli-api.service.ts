import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../interfaces/film.interface';

@Injectable({ providedIn: 'root' })
export class GhibliApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://ghibliapi.vercel.app/films';

  public films = signal<Film[]>([]);
  public loading = signal(false);
  public error = signal<string | null>(null);

  public loadFilms(): void {
    this.loading.set(true);

    this.http.get<Film[]>(this.baseUrl).subscribe({
      next: (res) => {
        console.log('Fetched films:', res);
        this.films.set(res);
        this.loading.set(false);
      },
      error: (err: Error) => {
        this.error.set(err.message ?? 'Unknown error');
        this.loading.set(false);
      },
    });
  }
}
