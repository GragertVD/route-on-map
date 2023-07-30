import style from './style.module.scss'
import './style.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Table } from 'antd';
import { fetchPolyline, selectRoute } from "../../store/action/actionCreators";

interface DataType {
  key: number;
  id: number;
  point_1_lat: number;
  point_1_lng: number;
  point_2_lat: number;
  point_2_lng: number;
  point_3_lat: number;
  point_3_lng: number;
}

export const MyTable: React.FC = () => {
  const { Column, ColumnGroup } = Table;

  const routes = useTypedSelector(state => state.routes);
  const dispatch = useDispatch();

  const data: DataType[] = [];
  for (let route of routes.routesArray) {
    data.push({
      key: route.id,
      id: route.id,
      point_1_lat: route.points[0].lat,
      point_1_lng: route.points[0].lng,
      point_2_lat: route.points[1].lat,
      point_2_lng: route.points[1].lng,
      point_3_lat: route.points[2].lat,
      point_3_lng: route.points[2].lng,
    });
  }


  return (

    <Table
      size="small"
      pagination={false}
      dataSource={data}
      rowClassName={(row) => (row.key === routes.selectRoute ? style.row + ' ' + style.row_selected: style.row)}
      onRow={(row) => {
        return {
          onClick: () => {
            dispatch(selectRoute(Number(row.id)));
            dispatch(fetchPolyline());
          },
        };
      }}
      scroll={{x: 400}}
      
    >
      <Column title="Маршрут" dataIndex="id" key="id" width={'100px'}/>
      <ColumnGroup title="Точка 1">
        <Column title="lat" dataIndex="point_1_lat" key="point_1_lat" />
        <Column title="lng" dataIndex="point_1_lng" key="point_1_lng" />
      </ColumnGroup>
      <ColumnGroup title="Точка 2">
        <Column title="lat" dataIndex="point_2_lat" key="point_2_lat" />
        <Column title="lng" dataIndex="point_2_lng" key="point_2_lng" />
      </ColumnGroup>
      <ColumnGroup title="Точка 3">
        <Column title="lat" dataIndex="point_3_lat" key="point_3_lat" />
        <Column title="lng" dataIndex="point_3_lng" key="point_3_lng" />
      </ColumnGroup>
    </Table>
  )
}

