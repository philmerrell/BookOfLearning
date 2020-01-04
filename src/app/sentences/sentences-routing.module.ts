import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentencesPage } from './sentences.page';

const routes: Routes = [
  {
    path: '',
    component: SentencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentencesPageRoutingModule {}
