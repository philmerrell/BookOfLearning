import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentencesPageRoutingModule } from './sentences-routing.module';

import { SentencesPage } from './sentences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentencesPageRoutingModule
  ],
  declarations: [SentencesPage]
})
export class SentencesPageModule {}
