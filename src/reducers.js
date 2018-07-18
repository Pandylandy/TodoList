
/* eslint-disable import/first */
import * as CONST from './constants';


let id = 1;


export const todo = (state = [], action) => {

  const editFieldByKey = (key, editKey, compareKey, value) => (obj) => {
      if (obj[key] === compareKey) {
          obj[editKey] = value;
      }
      return obj;
  };

  const setStatus = editFieldByKey.bind(null, 'id', 'status');

  switch (action.type) {
    case CONST.ACTIVATE_TASK:
      const setStatusOpen = setStatus(action.id, 'open');
      return state.map(setStatusOpen);

    case CONST.ADD_TASK:
      return [...state, {id: id++, status: 'open', text: action.text }];

      case CONST.CLOSE_TASK:
        const setStatusDone = setStatus(action.id, 'done');
        return state.map(setStatusDone);

      case CONST.SHOW_ACTIVE:
          const filterOpen = (o) => o.status === 'open';
          return state.filter(filterOpen);

      case CONST.SHOW_CLOSED:
          const filterClosed = (o) => o.status === 'done';

          return state.filter(filterClosed);

      case CONST.DELETE_TASK:
          return state.filter(o => o.id !== action.id)
              // .map((o, i) => o.id = i+1);

    default:
      return state;
  }
};
