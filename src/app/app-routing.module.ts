import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'sentences',
    loadChildren: () => import('./sentences/sentences.module').then( m => m.SentencesPageModule)
  },
  {
    path: 'first-grade-sight-words',
    loadChildren: () => import('./first-grade-sight-words/first-grade-sight-words.module').then( m => m.FirstGradeSightWordsPageModule)
  },
  {
    path: 'kindergarten-sight-words',
    loadChildren: () => import('./kindergarten-sight-words/kindergarten-sight-words.module').then( m => m.KindergartenSightWordsPageModule)
  },
  {
    path: 'saved-words',
    loadChildren: () => import('./saved-words/saved-words.module').then( m => m.SavedWordsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
