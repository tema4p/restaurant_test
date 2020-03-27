import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ITable} from '../models/ITable';
import {ReserveService} from '../services/reserve.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.page.html',
  styleUrls: ['./reserve-form.page.scss'],
})
export class ReserveFormPage implements OnInit {
  public table: ITable;
  public timeFrom: string;
  public timeTo: string;
  public timeSlots: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private reserveService: ReserveService
  ) {
    this.timeSlots = reserveService.getTimeFrom();
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.table = JSON.parse(params.table);
      this.timeFrom = params.timeFrom;
      this.timeTo = params.timeTo;
    });
  }

  async reserveTable() {
    const toast = await this.toastController.create({
      message: 'Your have successfully reserved the table!',
      duration: 2000
    });
    toast.present();
  }

  isAvailable() {
    return this.reserveService.checkTableAvailable(this.table, this.timeFrom.trim(), this.timeTo.trim());
  }

}
