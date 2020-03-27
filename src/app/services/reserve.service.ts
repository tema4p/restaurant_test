import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor() { }

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
