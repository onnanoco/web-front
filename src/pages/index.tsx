import * as React from 'react';
import  { useRouter } from 'next/router';

import { Tabs } from 'antd';

import { Space } from 'antd';
import { TeamOutlined, PlusOutlined, SmileOutlined, CommentOutlined } from '@ant-design/icons';

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

                </TabPane>
            </Tabs>
        </div>
    );
}
export default IndexPage;