import { Routes } from '@angular/router';
import { DiscoverComponent } from './features/discover/discover.component';

export const routes: Routes = [
  { path: '', redirectTo: 'discover', pathMatch: 'full' },
  { path: 'discover', component: DiscoverComponent },
  // watchlist & favorites pages will go here later
];
