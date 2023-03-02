import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  face: number = 1;
  debounce: boolean = false;

  constructor() {}

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  flipCoin() {
    if (this.debounce == true) return;
    this.debounce = true;
    const coinElement = document.getElementById('coin');
    if (!coinElement) return;
    coinElement.style.width = '0';
    setTimeout(() => {
      this.face = this.randomNumber(1, 3);
      coinElement.setAttribute('src', this.face == 1 && '../../assets/cara.png' || '../../assets/coroa.png');
      coinElement.style.width = '100%';
      setTimeout(() => {
        this.debounce = false;
      }, 300);
    }, 300);
  }

}
