import React, { useState, useContext } from 'react'
import { NavContext } from '../context/navContext'
import { Button, Space, Modal } from 'antd';
import img1 from '../assets/img/login-page.png'
import img2 from '../assets/img/netflix.png'

function Project() {
    const [size, setSize] = useState('large');
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const navData = useContext(NavContext)
    return (
        <div className="w-full h-auto bg-white p-8 mb-20" ref={navData.project}>
            <h2 className="tit">프로젝트</h2>
            <ul className="mt-8 project">
                <li>

                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <h3 className="project_tit s_tit w-full">🐕‍🦺 Pet Marking</h3>
                    <div>
                        <ul className="ex_list p-5 px-8">
                            <li>작업 기간: 2022.10 - 2022.12 </li>
                            <li>개인 작업</li>
                            <li>서비스 소개: 반려견과 함께 동반할 수 있는 나만의 북마크를 확인하는 웹 사이트입니다.</li>
                        </ul>

                        <Space wrap className="pr-10 pb-8 pt-0 flex justify-end">
                            <Button size={size} className="bg-yellow-500" onClick={() => setOpen(true)}>README</Button>
                            <Modal
                                title="🐕‍🦺 Pet Marking"
                                centered
                                open={open}
                                onOk={() => setOpen(false)}
                                onCancel={() => setOpen(false)}
                                width={1000}
                            >

                                <div>
                                    <img src={img2} alt="" />
                                </div>

                            </Modal>
                            <Button size={size} className="bg-slate-300">WEB SITE</Button>
                        </Space>
                    </div>
                </li>
                <li className="mt-4 border-t-2 pt-16">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <h3 className="project_tit s_tit w-full">🐕‍🦺 Netflix web site</h3>
                    <div>
                        <ul className="ex_list p-5 px-8">
                            <li>작업 기간: 2022.10 - 2022.12 </li>
                            <li>개인 작업</li>
                            <li>서비스 소개: 반려견과 함께 동반할 수 있는 나만의 북마크를 확인하는 웹 사이트입니다.</li>
                        </ul>

                        <Space wrap className="pr-10 pb-8 pt-0 flex justify-end">
                            <Button size={size} className="bg-yellow-500" onClick={() => setOpen2(true)}>README</Button>
                            <Modal
                                title="Netflix web site"
                                centered
                                open={open2}
                                onOk={() => setOpen2(false)}
                                onCancel={() => setOpen2(false)}
                                width={1000}
                            >
                                <p>some contents...</p>
                                <p>some contents...</p>
                                <p>some contents...</p>
                            </Modal>
                            <Button size={size} className="bg-slate-300">WEB SITE</Button>
                        </Space>
                    </div>
                </li>
            </ul >
        </div >

    )
}

export default Project