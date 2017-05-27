import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html'
})
export class PagamentoPage {

  constructor(public navCtrl: NavController) {
    
  }
  logout(){
    this.navCtrl.setRoot(LoginPage)
  }

}
