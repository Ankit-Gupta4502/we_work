"use client"
import React from 'react'
import { Row, Typography,Space } from 'antd'
const CompanyProfile = () => {

    return (
        <div className='px-50 mt-100' >
            <Row justify='space-between' align="middle" >
                <Typography.Title level={3} className='fw-bold' >
                    Project Scope Recap
                </Typography.Title>
                
                <div>

                <Space direction='horizontal' size={60} >
                    <Typography.Title type="secondary" level={5} >
                    Mutual Action Plan
                    </Typography.Title>
                    <Typography.Title type="success" level={3} className='fw-bold' >
                        3%
                    </Typography.Title>
                </Space>
                </div>

            </Row>
        </div>
    )
}

export default CompanyProfile