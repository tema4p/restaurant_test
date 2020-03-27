import {ITable} from './ITable';

export const GET_TABLES = 'GET_TABLES';
export const GET_TABLES_SUCCESS = 'GET_TABLES_SUCCESS';
export const GET_TABLES_ERROR = 'GET_TABLES_ERROR';

export function getTables() {
  return {
    type: GET_TABLES
  };
}

export interface ITableState {
  tables: ITable[];
  pending: boolean;
  error: boolean;
}

const initialState: ITableState = {
  tables: [],
  pending: false,
  error: null
};

export function tables( state = initialState, { type, payload } ) {
  switch (type) {
    case GET_TABLES:
      return Object.assign({}, state, {pending: true, error: null});
    case GET_TABLES_SUCCESS:
      return Object.assign({}, state, {tables: payload, pending: false});
    case GET_TABLES_ERROR:
      return Object.assign({}, state, {pending: false, error: 'Error'});
    default:
      return state;
  }
}
