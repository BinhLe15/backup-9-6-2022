import { Breadcrumb } from 'antd';
import React from 'react';

const AppBreadCrumb = () => (
  <Breadcrumb 
    separator=">" 
    style={{
    margin: '16px 0',
    }}
  >
    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
    <Breadcrumb.Item href="">Quản lý sự kiện</Breadcrumb.Item>
    <Breadcrumb.Item href="">Danh sách sự kiện</Breadcrumb.Item>
    {/* <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
  </Breadcrumb>
);

export default AppBreadCrumb;