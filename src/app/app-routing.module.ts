import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reserve-list',
    pathMatch: 'full'
  },
  {
    path: 'reserve-list',
    loadChildren: () => import('./reserve-list/reserve-list.module').then( m => m.ReserveListPageModule)
  },
  {
    path: 'reserve-form',
    loadChildren: () => import('./reserve-form/reserve-form.module').then( m => m.ReserveFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
