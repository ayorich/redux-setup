import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-reducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
