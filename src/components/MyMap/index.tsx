import { TileLayer, Marker, Popup, useMap, useMapEvents, Polyline } from 'react-leaflet';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import L, { LatLngBoundsExpression } from 'leaflet';
import { MyPolyline } from '../MyPolyline';


export const MyMap: React.FC = () => {
  L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
  const map = useMap();
  const routes = useTypedSelector(state => state.routes);

  if (!routes.selectRoute)
    return (
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    )
    
  const selectRout = routes.routesArray[routes.selectRoute - 1];

  const bounds: LatLngBoundsExpression = [
    [selectRout.points[0].lat, selectRout.points[0].lng],
    [selectRout.points[1].lat, selectRout.points[1].lng],
    [selectRout.points[2].lat, selectRout.points[2].lng],
  ];

  map.flyToBounds(bounds, {
    maxZoom: map.getBoundsZoom(bounds),
    animate: true,
    duration: 0.2,
    padding: [150, 150]
  });

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        selectRout.points.map((point, id) => (
          <Marker key={id} position={[point.lat, point.lng]}>
            <Popup>
              lat: {point.lat}<br />
              lng: {point.lng}
            </Popup>
          </Marker>
        ))
      }
      <MyPolyline />
    </>
  )
}

