import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'STT',
    dataIndex: 'number',
  },
  {
    title: 'Tên sự kiện',
    dataIndex: 'age',
  },
  {
    title: 'Loại sự kiện',
    dataIndex: 'address',
  },
  {
    title: 'Nội dung',
    dataIndex: 'address',
  },
  {
    title: 'Người tham gia',
    dataIndex: 'address',
  },
  {
    title: 'Ngày sự kiện',
    dataIndex: 'address',
  },
  {
    title: 'Thời gian diễn ra',
    dataIndex: 'address',
  },
  {
    title: 'Hành động',
    dataIndex: 'address',
  },
];
const dataNumber = [];

for (let i = 1; i <= 15; i++) {
  dataNumber.push({
    key: i,
    number: `${i}`,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const AppTable = () => {

  return (
    <div>
      <Table columns={columns} dataSource={dataNumber} />
    </div>
  );
};

export default AppTable;