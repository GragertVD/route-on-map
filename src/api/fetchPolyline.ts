import { OSRM_RequestData } from "../types/OSRM";
import { Route } from "../types/routes";

export async function fetchPolylineData(props: Route): Promise<OSRM_RequestData> {
  try {
    let URL = `https://router.project-osrm.org/route/v1/driving/`;

    for (const point of props.points) {
      URL += `${point.lng},${point.lat};`;
    }

    URL = URL.slice(0, -1) + '?overview=full&geometries=geojson';

    const response = await fetch(URL);


    if (!response.ok) {
      throw new Error('Error with response of https://router.project-osrm.org ');
    }

    return await response.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
}