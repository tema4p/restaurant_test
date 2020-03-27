import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveFormPageRoutingModule } from './reserve-form-routing.module';

import { ReserveFormPage } from './reserve-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveFormPageRoutingModule
  ],
  declarations: [ReserveFormPage]
})
export class ReserveFormPageModule {}
