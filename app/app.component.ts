import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatTabsModule, MatTabGroup } from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';

  selected = 0; //by deafult report tab will be selected ...

  tabType: string = 'Reports';

  onselectTab(event) {
    if (event.tab.textLabel === 'Tracker') {
      this.tabType = 'Tracker';
      console.log(this.tabType);
    } else {
      this.tabType = 'Reports';
      console.log(this.tabType);
    }
  }
}
