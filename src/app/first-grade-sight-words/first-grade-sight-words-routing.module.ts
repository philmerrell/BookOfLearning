import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstGradeSightWordsPage } from './first-grade-sight-words.page';

const routes: Routes = [
  {
    path: '',
    component: FirstGradeSightWordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstGradeSightWordsPageRoutingModule {}
