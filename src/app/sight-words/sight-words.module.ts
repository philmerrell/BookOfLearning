import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SightWordsPageRoutingModule } from './sight-words-routing.module';

import { SightWordsPage } from './sight-words.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SightWordsPageRoutingModule
  ],
  declarations: [SightWordsPage]
})
export class SightWordsPageModule {}
