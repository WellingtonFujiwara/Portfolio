import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public menuVariable:boolean = false;
  public boxBarVariable:boolean = false;

  public toggle() {
    this.menuVariable =! this.menuVariable;
    /* this.boxBarVariable =! this.boxBarVariable; */
  }

  public close() {
    this.menuVariable =! this.menuVariable
  }
}
