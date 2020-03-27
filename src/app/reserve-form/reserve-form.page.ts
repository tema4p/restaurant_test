import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITable} from '../models/ITable';
import {ReserveService} from '../services/reserve.service';

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
    private reserveService: ReserveService
  ) {
    this.timeSlots = reserveService.getTimeFrom();
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.table = JSON.parse(params.table);
      console.log('params', params);
      this.timeFrom = params.timeFrom;
      this.timeTo = params.timeTo;
    });
  }

}
