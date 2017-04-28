import { select, takeEvery } from 'redux-saga/effects';

function* getIncrementCounter() {
  const newValue = yield select(state => state.counter);
  console.log('Increment counter (select in saga):', newValue);
}

function* getDecrementCounter() {
  const newValue = yield select(state => state.counter);
  console.log('Decrement counter (select in saga):', newValue);
}

function* demoSaga() {
  yield takeEvery('incrementCounter', getIncrementCounter);
  yield takeEvery('decrementCounter', getDecrementCounter);
}

export default demoSaga;
