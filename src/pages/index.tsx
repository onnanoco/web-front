import * as React from 'react';
import  { useRouter } from 'next/router';

import { Tabs } from 'antd';

import { Space } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

function IndexPage() {

    const router = useRouter();
    const { TabPane } = Tabs;

    return (
        <div>
            <Tabs
                className='main-tab'
                defaultActiveKey={'onnanocos'}
                centered
            >
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

                </TabPane>
            </Tabs>
        </div>
    );
}
export default IndexPage;