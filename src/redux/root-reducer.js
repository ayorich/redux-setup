import { combineReducers } from '@reduxjs/toolkit';

import {
  reducer as counterReducer,
  slice as counterSlice,
} from '../features/counter/counter-reducer';

export const rootReducer = combineReducers({
  [counterSlice]: counterReducer,
});
