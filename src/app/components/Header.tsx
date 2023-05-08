"use client";
import React from 'react'
import { Row, Col, Typography, Layout, theme, Avatar, Space,Divider } from "antd"
import { AiOutlineSearch } from "react-icons/ai"
import avatarImg from "../../../public/images/Ellipse 704.png"
const LayoutHeader = () => {
    const { Header } = Layout
    const { Title, } = Typography
    return (
        <Header className='header'  >
            <Row align="middle"  >
                <Col span={4} >
                    <Space size={12} direction="horizontal">
                        <span>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.991 38C29.4795 38 37.9821 29.4934 37.9821 19C37.9821 8.50659 29.4795 0 18.991 0C8.50258 0 0 8.50659 0 19C0 29.4934 8.50258 38 18.991 38Z" fill="#04433B" />
                                <path d="M18.991 31C25.6153 31 30.9854 25.6274 30.9854 19C30.9854 12.3726 25.6153 7 18.991 7C12.3668 7 6.9967 12.3726 6.9967 19C6.9967 25.6274 12.3668 31 18.991 31Z" fill="#00B686" />
                            </svg>

                        </span>
                        <span>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.70001 11.3L6.30001 6.69999C6.40001 6.59999 6.47068 6.49165 6.51201 6.37499C6.55401 6.25832 6.57501 6.13332 6.57501 5.99999C6.57501 5.86665 6.55401 5.74165 6.51201 5.62499C6.47068 5.50832 6.40001 5.39999 6.30001 5.29999L1.70001 0.699987C1.51668 0.516654 1.28335 0.424988 1.00001 0.424988C0.716679 0.424988 0.483346 0.516654 0.300013 0.699987C0.116679 0.883321 0.025012 1.11665 0.025012 1.39999C0.025012 1.68332 0.116679 1.91665 0.300013 2.09999L4.20001 5.99999L0.300013 9.89999C0.116679 10.0833 0.025012 10.3167 0.025012 10.6C0.025012 10.8833 0.116679 11.1167 0.300013 11.3C0.483346 11.4833 0.716679 11.575 1.00001 11.575C1.28335 11.575 1.51668 11.4833 1.70001 11.3V11.3Z" fill="#657372" />
                            </svg>

                        </span>
                    </Space>
                </Col>

                <Col span={4} offset={16}>
                    <div>

                        <Row justify="space-between" align="middle" >
                            <AiOutlineSearch size={24} color='#657372' />


                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.8125 0.75H19.1875C21.3538 0.75 23.124 2.44556 23.2436 4.58197L23.25 4.8125V19.1875C23.25 21.3538 21.5544 23.124 19.418 23.2436L19.1875 23.25H4.8125C2.64621 23.25 0.875938 21.5544 0.756425 19.418L0.75 19.1875V4.8125C0.75 2.64621 2.44556 0.875938 4.58197 0.756425L4.8125 0.75ZM2.625 15.125V19.1875C2.625 20.3353 3.50889 21.2765 4.63309 21.3678L4.8125 21.375H19.1875C20.3353 21.375 21.2765 20.4911 21.3678 19.3669L21.375 19.1875V15.125H16.5938C16.1755 17.1854 14.4059 18.755 12.2504 18.8684L12 18.875C9.81625 18.875 7.98123 17.3816 7.46046 15.3605L7.40626 15.125H2.625ZM19.1875 2.625H4.8125C3.66479 2.625 2.72351 3.50889 2.63225 4.63309L2.625 4.8125V13.25H8.25C8.72463 13.25 9.11686 13.6027 9.17894 14.0603L9.1875 14.1875C9.1875 15.7408 10.4467 17 12 17C13.4886 17 14.707 15.8435 14.806 14.38L14.8125 14.1875C14.8125 13.7129 15.1652 13.3206 15.6228 13.2585L15.75 13.25H21.375V4.8125C21.375 3.66479 20.4911 2.72351 19.3669 2.63225L19.1875 2.625Z" fill="#657372" />
                            </svg>



                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6195 5.75C20.4113 5.75 24.3238 9.43525 24.4884 14.112L24.4933 14.4015V19.1275L26.1261 22.7681C26.2079 22.9502 26.25 23.1469 26.25 23.3458C26.25 24.142 25.5879 24.7877 24.771 24.7877L19.1691 24.7894C19.1691 26.7006 17.5799 28.25 15.6195 28.25C13.7292 28.25 12.184 26.8092 12.076 24.9927L12.0695 24.7868L6.47935 24.7877C6.27663 24.7877 6.07607 24.747 5.89012 24.6683C5.14093 24.3509 4.7974 23.5017 5.12282 22.7713L6.74572 19.1286V14.4014C6.74643 9.60869 10.7118 5.75 15.6195 5.75ZM17.3938 24.7868L13.8448 24.7894C13.8448 25.745 14.6394 26.5197 15.6195 26.5197C16.542 26.5197 17.3002 25.8335 17.3861 24.956L17.3938 24.7868ZM15.6195 7.4803C11.6912 7.4803 8.52105 10.5651 8.52048 14.4015V19.4881L6.93032 23.0574H24.3188L22.7186 19.4893L22.7187 14.4163L22.7143 14.1565C22.5829 10.4266 19.4549 7.4803 15.6195 7.4803Z" fill="#657372" />
                                <circle cx="24.5" cy="8.5" r="8.5" fill="#F97777" />
                                <path d="M24.0059 11.4004V10.2754H21.5579C23.1149 9.14139 23.9609 8.25039 23.9609 7.22439C23.9609 6.02739 22.9439 5.30739 21.6659 5.30739C20.8289 5.30739 19.9379 5.61339 19.3529 6.28839L20.0819 7.13439C20.4869 6.71139 21.0089 6.44139 21.6929 6.44139C22.1879 6.44139 22.6649 6.70239 22.6649 7.22439C22.6649 7.96239 21.9449 8.58339 19.4879 10.4014V11.4004H24.0059ZM27.2154 11.5084C28.6644 11.5084 29.6184 10.7074 29.6184 9.42939C29.6184 8.21439 28.7094 7.48539 27.6924 7.48539C27.1434 7.48539 26.6574 7.70139 26.3694 7.98939V6.52239H29.2134V5.39739H25.0914V8.84439L25.9824 9.07839C26.3424 8.73639 26.7474 8.59239 27.2424 8.59239C27.9264 8.59239 28.3224 8.95239 28.3224 9.48339C28.3224 9.96939 27.9174 10.3744 27.2064 10.3744C26.5764 10.3744 26.0184 10.1404 25.6134 9.71739L24.9024 10.6084C25.4154 11.1664 26.1714 11.5084 27.2154 11.5084Z" fill="white" />
                            </svg>


                            <Avatar size={45} shape="circle" src={avatarImg.src} />

                        </Row>
                    </div>
                </Col>
            </Row>
            <Divider className='my-4' />
        </Header>
    )
}

export default LayoutHeader