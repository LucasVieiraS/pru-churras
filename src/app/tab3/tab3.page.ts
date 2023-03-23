import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  defaultDicePath: string = '../../assets/defaultDice.png';
  diceRollPath: string = '../../assets/diceRoll.gif';
  diceSource: string = this.defaultDicePath;

  currentDiceValue: number = 6;
  randomDiceValue: number = this.currentDiceValue;

  debounce: boolean = false;
  rollingDice: boolean = false;

  textState: string = 'ROLE O DADO!';
  pageRoute: string = 'TABLETOP';

  constructor(private toastController: ToastController) {}

  async notify(icon: string = 'dice', text: string = "RESULTADO NÃO CARREGOU!") {
    const toast = await this.toastController.create({
      message: text,
      icon: icon,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  switchPageRoute(event: any) {
    this.pageRoute = event.target.firstChild.innerHTML;
  }

  rollDice() {
    if (this.debounce) return;
    this.debounce = true;
    this.rollingDice = true;
    this.textState = 'RODANDO O DADO...'
    this.diceSource = this.diceRollPath;
    this.randomDiceValue = Math.floor( Math.random() * this.currentDiceValue ) + 1;
    setTimeout(() => {
      this.rollingDice = false;
      this.debounce = false;
      this.diceSource = this.defaultDicePath;
      this.textState = 'RESULTADO:'
      this.notify('dice', `RESULTADO: ${ this.randomDiceValue }`);
    }, 1500)
  }

}
