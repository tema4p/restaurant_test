import { Component, OnInit } from '@angular/core';
import {ITable} from '../models/ITable';
import {filter} from 'lodash';
import {Router} from '@angular/router';
import {ReserveService} from '../services/reserve.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {GET_TABLES, ITableState} from '../models/table.reducer';

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

  public state$: Observable<ITableState> = this.store.select(state => state.tables);
  public fetchedTables: ITable[] = [];
  public filteredTables: ITable[] = [];


  constructor(
    private store: Store<{tables: ITableState}>,
    private router: Router,
    private reserveService: ReserveService
  ) {
    this.timeSlots = reserveService.getTimeFrom();
  }

  ngOnInit() {
    this.store.dispatch({ type: GET_TABLES });

    this.state$.subscribe((state: ITableState) => {
      this.fetchedTables = state.tables;
      this.filterTables();
    });
  }

  filterTables() {
    this.filteredTables = filter(this.fetchedTables, (table: ITable) => {
      const matchSeats = this.filterSeats === '' || table.seats === +this.filterSeats;
      let available = true;

      if (this.filterFrom || this.filterTo) {
        available = this.reserveService.checkTableAvailable(table, this.filterFrom, this.filterTo);
      }

      return matchSeats && available;
    });
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
