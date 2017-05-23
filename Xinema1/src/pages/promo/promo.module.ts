import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Promo } from './promo';

@NgModule({
  declarations: [
    Promo,
  ],
  imports: [
    IonicPageModule.forChild(Promo),
  ],
  exports: [
    Promo
  ]
})
export class PromoModule {}
