
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
      console.log(...state);
      return [...state, {id: id++, status: 'open', text: action.text }];

      case CONST.CLOSE_TASK:
        const setStatusDone = setStatus(action.id, 'done');
        return state.map(setStatusDone);

    default:
      return state;
  }
};
