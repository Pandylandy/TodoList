import * as CONST from './constants';


export const addTaskAction = text => ({
  type: CONST.ADD_TASK,
  text,
});

export const closeTaskAction = id => ({
  type: CONST.CLOSE_TASK,
  id,
});

export const activateTaskAction = id => ({
  type: CONST.ACTIVATE_TASK,
  id,
});


export const showActiveAction = () => ({
    type: CONST.SHOW_ACTIVE,
});


export const showClosedAction = () => ({
    type: CONST.SHOW_CLOSED,
});

export const showAllAction = () => ({
    type: CONST.SHOW_ALL,
});