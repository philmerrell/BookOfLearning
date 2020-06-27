import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordSliderComponent } from './word-slider/word-slider.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ WordSliderComponent ],
  exports: [ WordSliderComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
