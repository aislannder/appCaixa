import { LoginPage } from './../login/login';
import { NovatransferenciaPage } from './../novatransferencia/novatransferencia';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-transferencia',
  templateUrl: 'transferencia.html'
})
export class TransferenciaPage {

  constructor(public navCtrl: NavController) {

  }

  novaTransferencia(){
    this.navCtrl.push(NovatransferenciaPage)
  }

  logout(){
    this.navCtrl.setRoot(LoginPage)
  }
}
