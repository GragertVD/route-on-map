import './App.css';
import { MyMap } from './components/MyMap';
import { MapContainer } from 'react-leaflet';
import { Layout } from 'antd';
import { useState } from 'react';
import { MyTable } from './components/Table';


function App() {
  const { Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        height: '100vh'
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={'500px'}
        style={{
          overflowX: 'hidden',
          background: 'white',
        }}
      >
        <MyTable />
      </Sider>
      <Content
        style={{
          // margin: '24px 16px',
          // padding: 24,
          // minHeight: 280,
          width: '100%',
          height: '100%',
          position: 'relative',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          // zIndex: '-1',
        }}>
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true} >
          <MyMap />
        </MapContainer>
      </Content>
    </Layout>
  );
}

export default App;
