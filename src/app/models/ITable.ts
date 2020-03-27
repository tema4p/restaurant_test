
export interface IReserveTime {
  timeFrom: string;
  timeTo: string;
}

export interface ITable {
  id: number;
  seats: number;
  location: string;
  reserves?: IReserveTime[];
}
