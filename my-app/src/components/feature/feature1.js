
import React from 'react';
import { Col, Row, Input, Select, Button } from 'antd';

import AppBreadCrumb from '../common/breadcrumb.js';
import AppDateSelect from './dateSelect.js';
import AppTable from './table.js';

const {Option} = Select;
function AppFeature1
() {
    return(
        <div className='feature-background'>
            <AppBreadCrumb />
            <h2 style={{color: '#FFFFFF'}}>Quản lý sự kiện</h2>
            <div 
                className="block-featureBlock1" 
                style={{color: 'black', background: '#FFFFFF', padding: 20, marginBottom: 20}}
            >
                <h3 style={{marginLeft: -5}}>Thông tin tìm kiếm</h3>
                <Row gutter={[48, 24]} className="block-rowBlock1" style={{marginLeft: -50}}>
                    <Col span={10} style={{paddingLeft: 45}}>
                        Tên sự kiện
                        <Input placeholder="" style={{width: 550, height: 50}}/>
                    </Col>
                    <Col span={10} style={{ marginLeft:125}}>
                        Người tham gia
                        <Select
                            showSearch
                            style={{
                            width: 550,
                            }}
                            placeholder=""
                            optionFilterProp="children"
                            filterOption={(input, option) => option.children.includes(input)}
                            filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">Not Identified</Option>
                            <Option value="2">Closed</Option>
                            <Option value="3">Communicated</Option>
                            <Option value="4">Identified</Option>
                            <Option value="5">Resolved</Option>
                            <Option value="6">Cancelled</Option>
                        </Select>
                    </Col>
                    <Col span={10} style={{paddingLeft: 45}}>
                        Loại sự kiện
                        <Select
                            showSearch
                            style={{
                            width: 550,
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
                    <Col 
                        span={10} 
                        style={{ paddingLeft: 0, margin: 'auto', marginLeft:150}}
                    >
                            Từ ngày - đến ngày
                        <Row className='rows' style={{width: 600}}>
                                <Col className='columns' style={{width: 260}}>
                                <AppDateSelect />
                                </Col>
                                <Col className='column-space' style={{padding: 5, marginLeft: -1}}>-</Col>
                                <Col className='columns' style={{width: 260}}>
                                <AppDateSelect />
                                </Col>
                        </Row>
                    </Col>
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