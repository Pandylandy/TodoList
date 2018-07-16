import * as CONST from './constants';


export const addTaskAction = text => ({
  type: CONST.ADD_TASK,
  text,
});

export const closeTaskAction = id => ({
  type: CONST.CLOSE_TASK,
  id,
});

export const activateTaskAction = text => ({
  type: CONST.ACTIVATE_TASK,
  text,
});
