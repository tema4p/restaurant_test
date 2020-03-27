import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ReserveService } from '../services/reserve.service';
import {GET_TABLES, GET_TABLES_SUCCESS} from './table.reducer';

@Injectable()
export class TableEffects {

  loadTables$ = createEffect(() => this.actions$.pipe(
    ofType(GET_TABLES),
    mergeMap(() => this.reserveService.getTables()
      .pipe(
        map(tables => ({ type: GET_TABLES_SUCCESS, payload: tables })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private reserveService: ReserveService
  ) {}
}
