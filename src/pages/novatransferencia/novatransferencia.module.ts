import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovatransferenciaPage } from './novatransferencia';

@NgModule({
  declarations: [
    NovatransferenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(NovatransferenciaPage),
  ],
  exports: [
    NovatransferenciaPage
  ]
})
export class NovatransferenciaPageModule {}
