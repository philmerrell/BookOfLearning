import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstGradeSightWordsPageRoutingModule } from './first-grade-sight-words-routing.module';

import { FirstGradeSightWordsPage } from './first-grade-sight-words.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FirstGradeSightWordsPageRoutingModule
  ],
  declarations: [FirstGradeSightWordsPage]
})
export class FirstGradeSightWordsPageModule {}
