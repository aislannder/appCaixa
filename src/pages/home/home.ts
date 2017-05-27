import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historico:any

  constructor(public navCtrl: NavController) {
    this.historico = [
      {
        tipo: "debito",
        valor: "500",
        descricao: "Pizzaria",
        data: "05/02/2017"
      },
      {
        tipo: "debito",
        valor: "300",
        descricao: "Energia",
        data: "05/04/2017"
      },
      {
        tipo: "credito",
        valor: "1200",
        descricao: "Depósito",
        data: "10/04/2017"
      },
      {
        tipo: "credito",
        valor: "5500",
        descricao: "Salário",
        data: "15/05/2017"
      },
      {
        tipo: "debito",
        valor: "700",
        descricao: "Pensão Alimenticia",
        data: "13/06/2017"
      },
      {
        tipo: "credito",
        valor: "300",
        descricao: "Propina",
        data: "01/09/2017"
      },
      {
        tipo: "credito",
        valor: "500000",
        descricao: "BKB Odebrecht CX 2",
        data: "03/10/2017"
      },
    ]
    
  }

  logout(){
    this.navCtrl.parent.parent.setRoot(LoginPage)
  }

}
