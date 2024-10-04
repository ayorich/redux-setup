import { call, put, takeEvery } from 'redux-saga/effects';

import { addNumber, fetchNumber } from './counter-reducer';

const randomNumber = () => Math.floor(Math.random() * 1000);

function* handleFetchNumbers() {
  const number = yield call(randomNumber);
  if (number) {
    yield put(addNumber(number));
  }
}

function* watchFetchNumbers() {
  yield takeEvery(fetchNumber().type, handleFetchNumbers);
}

export { watchFetchNumbers };
