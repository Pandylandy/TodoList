import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(combineReducers(reducers), composeWithDevTools());

