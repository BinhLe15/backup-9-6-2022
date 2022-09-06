import { DatePicker, Space } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;

const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
//   console.log('Formatted Selected Time: ', dateString);
};

const onOk = (value) => {
  console.log('onOk: ', value);
};

const AppDateSelect = () => (
  <Space direction="vertical" size={12}>
    <DatePicker 
        showTime onChange={onChange}
        onOk={onOk} 
        placeholder="-- dd/mm/yyyy --"
        style={{width: 260, height: 50}}
    />
    {/* <RangePicker
      showTime={{
        format: 'HH:mm',
      }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    /> */}
  </Space>
);

export default AppDateSelect;