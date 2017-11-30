import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showNgFor: boolean
  showNgIf: boolean
  showNgSwitch: boolean

  constructor() {
    this.showNgFor = true;
    this.showNgIf = true;
    this.showNgSwitch = true;
  }

  toggleNgFor() {
    console.log('toogle ng For'+this.showNgFor);
    this.showNgFor = ! this.showNgFor;
    console.log('toogle ng For' + this.showNgFor);
  }

  toggleNgIf() {
    this.showNgIf = ! this.showNgIf;
  }

  toggleNgSwitch() {
    this.showNgSwitch = !this.showNgSwitch;
  }
}
