import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    CalendarOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import { 
    FaUsersCog,
    FaUserEdit, 
  } from 'react-icons/fa';
  const { Header, Sider, Content, Footer } = Layout;

  const WebLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <CalendarOutlined />,
                label: 'Quản lý sự kiện',
              },
              {
                key: '2',
                icon: <FaUserEdit />,
                label: 'Quản lý người tham gia sự kiện',
              },
              {
                key: '3',
                icon: <FaUsersCog />,
                label: 'Quản lý vai trò',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
          <Footer
            style={{
            textAlign: 'center',
            }}
            >
            Chăm sóc khách hàng    Email: cskh_vts@viettel.com.vn Hotline: 1900 8068    Copyright © 2021 Viettel Solutions, Inc
            </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default WebLayout;
