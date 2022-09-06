import React from "react";
import { Col, Row } from "antd"

function AppFooter() {
    return(
        <Row  className='rows' style={{width: 1245, justifyContent: 'center'}}>
            <Col className='columns' style={{width: 150}}>
                Chăm sóc khách hàng
            </Col>
            <Col className='columns' style={{width: 360}}>
                Email: <span style={{color: '#CB002B'}}>cskh_vts@viettel.com.vn</span> Hotline: <span style={{color: '#CB002B', textTransform: 'uppercase'}}>1900 8068</span>
            </Col>
            <Col className='columns' style={{width: 250}}>
                Copyright © 2021 Viettel Solutions, Inc
            </Col>
        </Row>
    )
}

export default AppFooter;
