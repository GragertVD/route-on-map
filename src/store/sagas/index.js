import { put, call, takeEvery, fork, select } from 'redux-saga/effects';
import { RoutesActionTypes } from '../../types/routes';
import { fetchPolylineData } from '../../api/fetchPolyline';
import { fetchPolylineError, fetchPolylineSuccess } from '../action/actionCreators';


export function* handleFetchPolyline() {
  try {
    const { routes } = yield select(state => state);

    const selectRout = routes.routesArray[routes.selectRoute - 1];

    const data = yield call(fetchPolylineData, selectRout);;
    yield put(fetchPolylineSuccess(data.routes[0]));

  } catch (error) {
    yield put(fetchPolylineError(error));
  }
}

export function* watchPopularSaga() {
  yield takeEvery(RoutesActionTypes.FETCH_POLYLINE, handleFetchPolyline);
}

export default function* rootSaga() {
  yield fork(watchPopularSaga);
}