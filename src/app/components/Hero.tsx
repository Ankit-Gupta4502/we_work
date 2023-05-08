"use client"
import React from 'react'
import { Layout, Typography, Row, Button } from "antd"
import Image from 'next/image'
import weWork from "../../../public/images/wework_1.png"
import sales from "../../../public/images/salesforce.png"
const Hero = () => {
    const { Content } = Layout
    const { Title } = Typography
    return (
        <Content className='px-50' >
            <Row justify="space-between" align="middle">
                <Title level={2} className='fw-bold text-primary' >
                    WeWork + Salesforce
                </Title>

                <Button type='primary' className='shadow-none fw-medium' >
                    Publish/Share
                </Button>
            </Row>

            <div className='hero-bg'>

                <div className="collab-wrapper">
                    <Image src={weWork} alt='' width={77} height={77} />
                    <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.7476 0C9.1273 0 9.4412 0.28201 9.4909 0.64808L9.4978 0.74985L9.499 8H16.7521C17.1663 8 17.5021 8.3358 17.5021 8.75C17.5021 9.1297 17.2199 9.4435 16.8539 9.4932L16.7521 9.5H9.499L9.501 16.7491C9.5011 17.1633 9.1654 17.4993 8.7512 17.4993C8.3715 17.4993 8.0576 17.2173 8.0079 16.8512L8.001 16.7494L7.999 9.5H0.75C0.33578 9.5 0 9.1642 0 8.75C0 8.3703 0.28215 8.0565 0.64823 8.0068L0.75 8H7.999L7.9978 0.75015C7.9977 0.33594 8.3334 0 8.7476 0Z" fill="#8C8C8C" />
                        </svg>

                    </span>
                    <Image src={sales} alt='' width={77} height={77} />

                </div>
            </div>
        </Content>
    )
}

export default Hero