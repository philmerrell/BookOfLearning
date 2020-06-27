import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KindergartenSightWordsPageRoutingModule } from './kindergarten-sight-words-routing.module';

import { KindergartenSightWordsPage } from './kindergarten-sight-words.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    KindergartenSightWordsPageRoutingModule
  ],
  declarations: [KindergartenSightWordsPage]
})
export class KindergartenSightWordsPageModule {}
