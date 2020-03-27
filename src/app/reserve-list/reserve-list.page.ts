import { Component, OnInit } from '@angular/core';
import {ITable} from '../models/ITable';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {ReserveService} from '../services/reserve.service';

@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-list.page.html',
  styleUrls: ['./reserve-list.page.scss'],
})
export class ReserveListPage implements OnInit {
  public filterSeats = '';
  public filterFrom = '';
  public filterTo = '';

  public timeSlots: string[];

  public tables: ITable[] = [{
    id: 1,
    seats: 2,
    location: `King's throne`,
    reserves: [{
      timeFrom: '12:00',
      timeTo: '14:00',
    }, {
      timeFrom: '15:00',
      timeTo: '19:00',
    }]
  }, {
    id: 2,
    seats: 4,
    location: `Close to the window`,
    reserves: [{
      timeFrom: '14:00',
      timeTo: '18:00',
    }, {
      timeFrom: '20:00',
      timeTo: '21:00',
    }]
  }, {
    id: 3,
    seats: 6,
    location: `On the floor`,
    reserves: [{
      timeFrom: '11:00',
      timeTo: '13:00',
    }, {
      timeFrom: '19:00',
      timeTo: '20:00',
    }]
  }];

  constructor(
    private router: Router,
    private reserveService: ReserveService
  ) {
    this.timeSlots = reserveService.getTimeFrom();
  }

  ngOnInit() {
  }

  public reserveTable(table: ITable) {
    this.router.navigate(['/reserve-form'],
      {
        queryParams: {
          table: JSON.stringify(table),
          timeFrom: this.filterFrom,
          timeTo: this.filterTo
        }
      });
  }
}
