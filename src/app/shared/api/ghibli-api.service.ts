import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../interfaces/film.interface';

@Injectable({ providedIn: 'root' })
export class GhibliApiService {
  private readonly baseUrl = 'https://ghibliapi.vercel.app/films';

  // signals to track loading/error/data
  public films = signal<Film[]>([]);
  public loading = signal(false);
  public error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  /** Fetch all films */
  public loadFilms(): void {
    this.loading.set(true);

    this.http.get<Film[]>(this.baseUrl).subscribe({
      next: (res) => {
        console.log('Fetched films:', res);
        this.films.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message ?? 'Unknown error');
        this.loading.set(false);
      },
    });
  }
}
