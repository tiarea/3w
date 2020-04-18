import React from 'react';
import { Layout, Calendar,Row,Col,Typography } from 'antd';
import './App.css';
const { Header, Content, Footer } = Layout;
const { Text } = Typography;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="app-header">
          tiarea
        </Header>
        <Content className="app-content" style={{ minHeight: window.innerHeight - 100 }}>
          <Row>
            <Col span={24}>
            <Calendar />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Text>为可为于可为之时，则从；为不可为于不可为之时，则凶。</Text>
            </Col>
          </Row>
        </Content>
        <Footer className="app-footer">©2020 tiarea 鲁ICP备18036956号-1</Footer>
      </Layout>
    </div>
  );
}

export default App;
