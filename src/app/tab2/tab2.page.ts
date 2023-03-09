import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  increaseValueBy(element: any) {
    this.value += parseInt(element.target.innerHTML);
  }

  increaseRedTeamScore() {
    this.redScore += this.value;
    if (this.redScore < 12) return;
    this.redMatches += 1;
    this.redScore = 0;
    this.blueScore = 0;
  }

  reduceRedTeamScore() {
    this.redScore -= this.value;
  }

  increaseBlueTeamScore() {
    this.blueScore += this.value;
    if (this.blueScore < 12) return;
    this.blueMatches += 1;
    this.redScore = 0;
    this.blueScore = 0;
  }

  reduceBlueTeamScore() {
    this.blueScore -= this.value;
  }

  cleanup() {
    this.value = 1;
    /*
    this.redScore = 0;
    this.blueScore = 0;
    this.redMatches = 0;
    this.blueMatches = 0;
    */
  }

}
