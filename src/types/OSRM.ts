
export interface OSRM_RequestData {
  code: string;
  routes: OSRM_Route[];
  waypoints: Waypoint[];
}

export interface OSRM_Route {
  geometry: OSRM_Geometry;
  legs: OSRM_Leg[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
}

export interface OSRM_Geometry {
  coordinates: [number, number][];
  type: string;
}

export interface OSRM_Leg {
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

