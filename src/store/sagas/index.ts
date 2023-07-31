import { fork } from 'redux-saga/effects';
import { watchFetchPolylinelarSaga } from './fetchPolyline';


export default function* rootSaga() {
  yield fork(watchFetchPolylinelarSaga);
}