import { MyMap } from './components/MyMap';
import { MapContainer } from 'react-leaflet';
import { Layout } from 'antd';
import { useState } from 'react';
import { TableRoutes } from './components/TableRoutes';
import { useResize } from './hooks/useResize';


function App() {
  const { Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const screen = useResize();
  
  return (
    <Layout
      style={{
        maxHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={screen.isScreenMobileL? '400px' : '300px'}
        style={{
          overflowX: 'hidden',
          overflowY: 'auto',
          background: 'white',
          minWidth: '300px !important'
        }}
        
      >
        <TableRoutes />
      </Sider>
      <Content
        style={{
          width: '80%',
        }}>
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true} style={{ height: '100vh' }}>
          <MyMap />
        </MapContainer>
      </Content>
    </Layout>
  );
}

export default App;
