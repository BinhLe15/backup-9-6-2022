
import React, { useState } from 'react';
import { Col, Row, Input, Select, Button, Card, Radio } from 'antd';

import AppBreadCrumb from '../common/breadcrumb.js';
import AppTable from './table.js';

const {Option} = Select;
function AppFeature1() {
    const [value, setValue] = useState(1);

    const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
    return(
        <div className='feature-background'>
            <AppBreadCrumb />
            <h2 style={{color: '#FFFFFF'}}>Danh sách vai trò    </h2>
            <div 
                className="block-featureBlock1" 
                style={{color: 'black', background: '#FFFFFF', padding: 20, marginBottom: 20}}
            >
                <h3 style={{marginLeft: -5}}>Thông tin tìm kiếm</h3>
                <Row gutter={[48, 24]} className="block-rowBlock1" style={{marginLeft: -50}}>
                    <Col span={10} style={{paddingLeft: 45}}>
                        Quyền vai trò
                        <Select
                            className='select_vai_tro'
                            showSearch
                            style={{
                                width: 550,
                                height: 50
                            }}
                            placeholder="-- Chọn --"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.children.includes(input)}
                            filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">Sinh nhật</Option>
                            <Option value="2">Đám cưới</Option>
                        </Select>
                    </Col>
                    <Col span={10} style={{ marginLeft:125}}>
                        Loại
                            <Card
                                size="small"
                                style={{
                                width: 550,
                                }}
                            >
                                <Radio.Group onChange={onChange} value={value}>
                                    {/* <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                    <Radio value={3}>C</Radio> */}
                                    <Row style={{width: 550,}}>
                                        <Col>
                                            <Radio value={1} style={{width: 210}}>Tất cả</Radio>
                                        </Col>
                                        <Col>
                                            <Radio value={2} style={{width: 210}}>Trung tâm</Radio>
                                        </Col>
                                        <Col>
                                            <Radio value={3}>Chức vụ</Radio>
                                        </Col>
                                    </Row>
                                </Radio.Group> 
                            </Card>
                    </Col>
                    <Col span={10} style={{paddingLeft: 45}}>
                        Tên
                        <Input placeholder="" style={{width: 550, height: 50}}/>
                    </Col>
                    <Col 
                        span={10} 
                        style={{ paddingLeft: 0, margin: 'auto', marginLeft:150}}
                    />
                <Button 
                    type="primary" 
                    style={{ 
                        marginLeft: 550,
                        width: 152,
                        height: 48,
                        background: '#CB002B'
                    }}
                >
                    Tìm kiếm
                </Button>
                </Row>

            </div>

            <div
                className="block-featureBlock1"
                style={{color: 'black', background: '#FFFFFF', padding: 20, marginTop: 20}}
            >
                <AppTable />
            </div>
        </div>
    )
}

export default AppFeature1
;