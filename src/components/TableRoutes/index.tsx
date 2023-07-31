import style from './style.module.scss'
import './style.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Table } from 'antd';
import { fetchPolyline, selectRoute } from "../../store/action/actionCreators";

//структура объекта для вывода в таблицу
interface DataType {
  key: number;
  id: number;
  point_1: string;
  point_2: string;
  point_3: string;
}

export const TableRoutes: React.FC = () => {
  const { Column } = Table;

  const routes = useTypedSelector(state => state.routes);
  const dispatch = useDispatch();

  //Заполняем данные для таблици
  const data: DataType[] = [];
  for (let route of routes.routesArray) {
    data.push({
      key: route.id,
      id: route.id,
      point_1: route.points[0].lat + ', ' + route.points[0].lng,
      point_2: route.points[1].lat + ', ' + route.points[0].lng,
      point_3: route.points[2].lat + ', ' + route.points[0].lng,
    });
  }


  return (

    <Table
      size="small"
      pagination={false}
      dataSource={data}
      rowClassName={(row) => (row.key === routes.selectRouteId ? style.row + ' ' + style.row_selected : style.row)}
      onRow={(row) => {
        return {
          onClick: () => {
            dispatch(selectRoute(Number(row.id)));
            dispatch(fetchPolyline());
          },
        };
      }}
      scroll={{ x: 400 }}
      style={{
        paddingBottom: '40px'
      }}
    >
      <Column title="Маршрут" dataIndex="id" key="id" />
      <Column title="Точка 1" dataIndex="point_1" key="point_1" />
      <Column title="Точка 2" dataIndex="point_2" key="point_2" />
      <Column title="Точка 3" dataIndex="point_3" key="point_3" />
    </Table>
  )
}

