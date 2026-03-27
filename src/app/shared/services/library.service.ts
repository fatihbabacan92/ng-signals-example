import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LibraryService {
  public watchlist = signal<Set<string>>(new Set());
  public favorites = signal<Set<string>>(new Set());

  public toggleWatchlist(id: string): void {
    const next = new Set(this.watchlist());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.watchlist.set(next);
  }

  public toggleFavorite(id: string): void {
    const next = new Set(this.favorites());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.favorites.set(next);
  }

  public inWatchlist(id: string): boolean {
    return this.watchlist().has(id);
  }

  public isFavorite(id: string): boolean {
    return this.favorites().has(id);
  }
}
