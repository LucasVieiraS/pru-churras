import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  timerActive: boolean = false;
  timerUnix: number = 0;
  timerString: string = '00:00:00';

  constructor() {}

  updateTimer() {
    this.timerString = new Date(this.timerUnix * 100).toISOString().slice(14, 22);
  }

  beginTimer() {
    this.increaseOne();
  }

  pauseTimer() {
    this.timerActive = false;
  }

  resetTimer() {
    this.timerUnix = 0;
    this.updateTimer();
  }

  switchTimer() {
    this.timerActive = !this.timerActive;
    if (!this.timerActive) {
      this.resetTimer();
    }
    this.beginTimer();
  }

  increaseOne() {
    if (!this.timerActive) return;
    this.timerUnix += 1;
    this.updateTimer();
    setTimeout(() => {
      this.increaseOne();
    }, 100);
  }

}
