import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveFormPage } from './reserve-form.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveFormPageRoutingModule {}
