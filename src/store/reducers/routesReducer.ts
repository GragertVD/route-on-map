import { Routes, RoutesAction, RoutesActionTypes } from "../../types/routes";


const initState: Routes = {
  routesArray: [
    { id: 1, points: [{ lat: 59.84660399, lng: 30.29496392 }, { lat: 59.82934196, lng: 30.42423701 }, { lat: 59.83567701, lng: 30.38064206 }] },
    { id: 2, points: [{ lat: 59.82934196, lng: 30.42423701 }, { lat: 59.82761295, lng: 30.41705607 }, { lat: 59.84660399, lng: 30.29496392 }] },
    { id: 3, points: [{ lat: 59.83567701, lng: 30.38064206 }, { lat: 59.84660399, lng: 30.29496392 }, { lat: 59.82761295, lng: 30.41705607 }] }
  ],
  selectRoute: 0,
  polyline: null,
  loadingPolyline: false,
  error: null,
}

export const routesReducer = (state: Routes = initState, action: RoutesAction): Routes => {
  let tempState = { ...state };
  tempState.error = null;

  switch (action.type) {
    case RoutesActionTypes.SELECT_ROUTE:
      tempState.selectRoute = action.payload;
      return tempState;

    case RoutesActionTypes.FETCH_POLYLINE:
      tempState.loadingPolyline = true;
      return tempState;

    case RoutesActionTypes.FETCH_POLYLINE_SUCCESS:
      tempState.loadingPolyline = false;
      tempState.polyline = action.payload;
      return tempState;

    case RoutesActionTypes.FETCH_POLYLINE_ERROR:
      tempState.loadingPolyline = false;
      tempState.error = action.payload;
      return tempState;

    default:
      return state;
  }
}
