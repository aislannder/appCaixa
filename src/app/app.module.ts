import { NovatransferenciaPage } from './../pages/novatransferencia/novatransferencia';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PagamentoPage } from '../pages/pagamento/pagamento';
import { TransferenciaPage } from '../pages/transferencia/transferencia';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from './../pages/menu/menu';
import { LoginPage } from './../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PagamentoPage,
    TransferenciaPage,
    HomePage,
    LoginPage,
    MenuPage,
    NovatransferenciaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    PagamentoPage,
    TransferenciaPage,
    HomePage,
    MenuPage,
    NovatransferenciaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
