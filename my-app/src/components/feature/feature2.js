
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
            <h2 style={{color: '#FFFFFF'}}>Danh sách người tham gia sự kiện</h2>
            <div 
                className="block-featureBlock1" 
                style={{color: 'black', background: '#FFFFFF', padding: 20, marginBottom: 20}}
            >
                <h3 style={{marginLeft: -5}}>Thông tin tìm kiếm</h3>
                <Row gutter={[48, 24]} className="block-rowBlock1" style={{marginLeft: -50}}>
                    <Col span={10} style={{paddingLeft: 45}}>
                        Họ và tên
                        <Input placeholder="" style={{width: 550, height: 50}}/>
                    </Col>
                    <Col span={10} style={{ marginLeft:125}}>
                        Email
                        <Input placeholder="" style={{width: 550, height: 50}}/>
                    </Col>
                    <Col span={10} style={{paddingLeft: 45}}>
                        Số điện thoại
                        <Input placeholder="" style={{width: 550, height: 50}}/>
                    </Col>
                    <Col 
                        span={10} 
                        style={{ paddingLeft: 0, margin: 'auto', marginLeft:150}}
                    >
                        Phòng ban/Đơn vị
                        <Input placeholder="" style={{width: 550, height: 50}}/>
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