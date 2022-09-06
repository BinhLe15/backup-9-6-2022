import React from "react";
import { Link } from "react-router-dom";

import { CalendarOutlined } from '@ant-design/icons';
import { FaUsersCog,FaUserEdit, } from 'react-icons/fa';
import {Menu} from 'antd'


function AppSider() {
    return (
      <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <CalendarOutlined />,
              label: 'Quản lý sự kiện',
              itemIcon:<Link to='/'/>
            },
            {
              key: '2',
              icon: <FaUserEdit />,
              label: 'Quản lý người tham gia sự kiện',
              itemIcon:<Link to='/QLNTGSK'/>
            },
            {
              key: '3',
              icon: <FaUsersCog />,
              label: 'Quản lý vai trò',
              itemIcon:<Link to='/QLVT'/>
            },
        ]}
      >
    
      </Menu>

  
    )
}

export default AppSider;