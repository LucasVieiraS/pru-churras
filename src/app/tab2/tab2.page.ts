import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import type { ToastOptions } from '@ionic/angular';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  value: number = 1;

  redScore: number = 0;
  redMatches: number = 0;

  blueScore: number = 0;
  blueMatches: number = 0;

  constructor(private toastController: ToastController) {}

  async sendToast(message: string, icon: string) {
    const toast = await this.toastController.create({
      message: message,
      icon: icon,
      duration: 3000,
    });

    await toast.present();
  }

  playQuack() {
    let quack = new Audio('../../assets/quack.mp3');
    quack.load();
    quack.play();
  }

  increaseValueBy(element: any) {
    const num = parseInt(element.target.innerHTML);
    if (this.value == num) {
      this.value = 1;
    } else {
      this.value = num;
    }
    this.playQuack();
    this.sendToast(`${ num === 1 && 'Truco' || num == 3 && 'Três' || num == 6 && 'Seis' || num == 9 && 'Nove' || num == 12 && 'Doze'  }! (${this.value})`.toUpperCase(), 'bar-chart');
  }

  increaseRedTeamScore() {
    this.redScore += this.value;
    this.value = 1;
    if (this.redScore < 12) return;
    this.redMatches += 1;
    this.redScore = 0;
    this.blueScore = 0;
    this.sendToast(`Red wins! (${ this.redMatches })`, 'trophy');
  }

  reduceRedTeamScore() {
    this.redScore -= this.value;
    this.value = 1;
    if (this.redScore < 0) {
      this.redScore = 0;
    }
  }

  increaseBlueTeamScore() {
    this.blueScore += this.value;
    this.value = 1;
    if (this.blueScore < 12) return;
    this.blueMatches += 1;
    this.redScore = 0;
    this.blueScore = 0;
    this.sendToast(`Blue wins! (${ this.blueMatches })`, 'trophy');
  }

  reduceBlueTeamScore() {
    this.blueScore -= this.value;
    this.value = 1;
    if (this.blueScore < 0) {
      this.blueScore = 0;
    }
  }

  cleanup() {
    this.value = 1;
    this.redScore = 0;
    this.blueScore = 0;
    this.redMatches = 0;
    this.blueMatches = 0;
  }

}
