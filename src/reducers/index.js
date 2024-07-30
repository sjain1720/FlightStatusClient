import { combineReducers } from 'redux';
import flights from './flights';
import isAdmin from './isAdmin';

export const reducers = combineReducers({ flights, isAdmin });
