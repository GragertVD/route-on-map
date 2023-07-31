import { call, put, select, takeEvery } from "redux-saga/effects";
import { RootState } from "../reducers";
import { OSRM_RequestData } from "../../types/OSRM";
import { fetchPolylineData } from "../../api/fetchPolyline";
import { fetchPolylineError, fetchPolylineSuccess } from "../action/actionCreators";
import { RoutesActionTypes } from "../../types/routes";

export function* handleFetchPolyline() {
  try {
    const { routes }: RootState = yield select(state => state);

    const selectRout = routes.routesArray[routes.selectRouteId - 1];

    const data: OSRM_RequestData = yield call(fetchPolylineData, selectRout);
    yield put(fetchPolylineSuccess(data.routes[0]));

  } catch (error) {
    yield put(fetchPolylineError(error));
  }
}


export function* watchFetchPolylinelarSaga() {
  yield takeEvery(RoutesActionTypes.FETCH_POLYLINE, handleFetchPolyline);
}