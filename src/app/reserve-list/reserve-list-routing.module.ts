import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveListPage } from './reserve-list.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveListPageRoutingModule {}
