import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet>
    <app-header></app-header>
  </router-outlet>`
})
export class AppComponent {
  title = 'Portfolio';
}
