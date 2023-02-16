import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  timerActive: boolean = false;
  timerUnix: number = 0;

  constructor() {}

  beginTimer() {
    this.increaseOne();
  }

  pauseTimer() {

  }

  resetTimer() {
    this.timerUnix = 0;
  }

  switchTimer() {
    this.timerActive = !this.timerActive;
    this.resetTimer();
    this.beginTimer();
  }

  increaseOne() {
    if (!this.timerActive) return;
    this.timerUnix += 1;
    setTimeout(() => {
      this.increaseOne();
    }, 1000);
  }

}
