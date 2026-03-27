import { Component } from '@angular/core';
import { Tab } from './interface/tab.interface';
import { TABS } from './constants/tab.constant';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  imports: [RouterModule],
})
export class TabComponent {
  public tabs: Tab[] = TABS;
}
