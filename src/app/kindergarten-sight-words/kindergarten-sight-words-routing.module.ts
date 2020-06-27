import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KindergartenSightWordsPage } from './kindergarten-sight-words.page';

const routes: Routes = [
  {
    path: '',
    component: KindergartenSightWordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KindergartenSightWordsPageRoutingModule {}
