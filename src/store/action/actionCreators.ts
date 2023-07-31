import { OSRM_Route } from "../../types/OSRM";
import { RoutesActionTypes } from "../../types/routes";

export const selectRoute = (idRoute: number) => ({
  type: RoutesActionTypes.SELECT_ROUTE,
  payload: idRoute
});

export const fetchPolyline = () => ({
  type: RoutesActionTypes.FETCH_POLYLINE,
});

export const fetchPolylineSuccess = (polylineData: OSRM_Route) => ({
  type: RoutesActionTypes.FETCH_POLYLINE_SUCCESS,
  payload: polylineData
});

export const fetchPolylineError = (error: any) => ({
  type: RoutesActionTypes.FETCH_POLYLINE_ERROR,
  payload: error
});