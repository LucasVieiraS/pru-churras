import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  redScore: number = 0;
  blueScore: number = 0;

  constructor() {}

  increaseRedScore() {
    this.redScore += 1;
  }

  increaseBlueScore() {
    this.blueScore += 1;
  }
}
