import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';

import { PagamentoPage } from '../pagamento/pagamento';
import { TransferenciaPage } from '../transferencia/transferencia';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PagamentoPage;
  tab3Root = TransferenciaPage;
  tab4Root = MenuPage;

  constructor() {

  }
}
