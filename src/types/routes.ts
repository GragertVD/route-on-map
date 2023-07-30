
export enum RoutesActionTypes {
  SELECT_ROUTE = "SELECT_ROUTE",
  FETCH_POLYLINE = "FETCH_POLYLINE",
  FETCH_POLYLINE_SUCCESS = "FETCH_POLYLINE_SUCCESS",
  FETCH_POLYLINE_ERROR = "FETCH_POLYLINE_ERROR",
}

interface SelectRouteAction {
  type: RoutesActionTypes.SELECT_ROUTE;
  payload: number;
}

interface FetchPolylineAction {
  type: RoutesActionTypes.FETCH_POLYLINE;
}

interface FetchPolylineSuccessAction {
  type: RoutesActionTypes.FETCH_POLYLINE_SUCCESS;
  payload: any;
}

interface FetchPolylineErrorAction {
  type: RoutesActionTypes.FETCH_POLYLINE_ERROR;
  payload: string | null;
}

export type RoutesAction = SelectRouteAction | FetchPolylineAction | FetchPolylineSuccessAction | FetchPolylineErrorAction;


export interface Routes {
  polyline: any,
  routesArray: Route[],
  selectRoute: number,
  loadingPolyline: boolean,
  error: string | null,
}

export interface Route {
  id: number,
  points: Point[],
}

export interface Point {
  lat: number,
  lng: number,
}