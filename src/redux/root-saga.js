import { all } from 'redux-saga/effects';
import { watchFetchNumbers } from '../features/counter/counter-saga';

function* rootSaga() {
  yield all([watchFetchNumbers()]);
}

export default rootSaga;
