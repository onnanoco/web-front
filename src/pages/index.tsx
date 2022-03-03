import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Tabs } from 'antd';

import Onnanocos from '@components/onnanocos';
import Add from '@components/add';
import History from '@components/history';
import About from '@components/about';

import { Space } from 'antd';
import {
  TeamOutlined,
  PlusOutlined,
  SmileOutlined,
  CommentOutlined,
} from '@ant-design/icons';

function IndexPage() {
  const router = useRouter();

  const [tabKey, setTabKey] = useState('onnanoco');

  const { TabPane } = Tabs;

  useEffect(() => {
    setTabKey(router.query?.tab as string);
  }, [router]);

  return (
    <div>
      <Tabs className="main-tab" defaultActiveKey={'onnanocos'} centered>
        <TabPane
          tab={
            <div>
              <Space>
                <TeamOutlined />
              </Space>
              <div>女の子</div>
            </div>
          }
          key="onnanocos"
        >
          <Onnanocos />
        </TabPane>

        <TabPane
          tab={
            <div>
              <Space>
                <PlusOutlined />
              </Space>
              <div>女の子登録</div>
            </div>
          }
          key="add"
        >
          <Add />
        </TabPane>

        <TabPane
          tab={
            <div>
              <Space>
                <CommentOutlined />
              </Space>
              <div>近況</div>
            </div>
          }
          key="history"
        >
          <History />
        </TabPane>

        <TabPane
          tab={
            <div>
              <Space>
                <SmileOutlined />
              </Space>
              <div>なにこれ</div>
            </div>
          }
          key="about"
        >
          <About />
        </TabPane>
      </Tabs>
    </div>
  );
}
export default IndexPage;
