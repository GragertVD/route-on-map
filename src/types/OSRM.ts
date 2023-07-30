
export interface OSRM_RequestData {
  code: string;
  routes: Route[];
  waypoints: Waypoint[];
}

export interface Route {
  geometry: Geometry;
  legs: Leg[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
}

export interface Geometry {
  coordinates: [number, number];
  type: string;
}

export interface Leg {
  steps: unknown[];
  summary: string;
  weight: number;
  duration: number;
  distance: number;
}

export interface Waypoint {
  hint: string;
  dispatch: number;
  name: string;
  location: [number, number];
}

