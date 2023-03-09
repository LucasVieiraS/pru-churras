import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  value: number = 1;

  constructor() {}

  increaseValueBy(element: any) {
    console.log(element);
  }

}
