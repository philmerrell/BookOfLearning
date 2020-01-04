import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SightWordsPage } from './sight-words.page';

const routes: Routes = [
  {
    path: '',
    component: SightWordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SightWordsPageRoutingModule {}
