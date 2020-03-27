import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IReserveTime, ITable} from '../models/ITable';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {


  constructor(private http: HttpClient) { }

  public getTables(): Observable<ITable[]> {
    return this.http.get<ITable[]>('http://localhost:3000/tables');
  }

  private checkOverlap(timeSegments): boolean {
    if (timeSegments.length === 1) {
      return false;
    }

    timeSegments.sort((timeSegment1, timeSegment2) =>
      timeSegment1[0].localeCompare(timeSegment2[0])
    );

    for (let i = 0; i < timeSegments.length - 1; i++) {
      const currentEndTime = timeSegments[i][1];
      const nextStartTime = timeSegments[i + 1][0];

      if (currentEndTime > nextStartTime) {
        return true;
      }
    }

    return false;
  }

  public checkTableAvailable(table, from, to): boolean {
    const timeSegments = map(table.reserves, (reserve: IReserveTime) => {
      return [reserve.timeFrom, reserve.timeTo];
    });

    timeSegments.push([
      from || '00:00',
      to || '24:00'
    ]);

    const res = this.checkOverlap(timeSegments);

    return !res;
  }

  public getTimeFrom() {
    return [
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00'
    ];
  }
}
