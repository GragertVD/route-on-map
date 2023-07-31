import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Polyline } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

export const MyPolyline: React.FC = () => {

  const routes = useTypedSelector(state => state.routes);

  if (routes.polyline == null) return <></>;

  const positions: LatLngExpression[] = routes.polyline.geometry.coordinates.map((coordinate: [number, number]) => [
    coordinate[1],
    coordinate[0],
  ]);


  return <Polyline positions={positions} />;
}

