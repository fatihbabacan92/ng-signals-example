import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabComponent } from './features/tab/tab.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabComponent],
  templateUrl: './app.html',
})
export class App {}
