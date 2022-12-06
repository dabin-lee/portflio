import React, { useContext } from 'react'
import Experiences from '../components/Experiences'
import Project from '../components/Project'
import { ClockCircleOutlined, EditOutlined } from '@ant-design/icons';
import { Timeline, Tag } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { NavContext } from '../context/navContext'
import profileImg from '../assets/img/profile_color.png'

function Main() {
    const navData = useContext(NavContext)
    return (
        <div className="w-8/12 h-full py-28 mb-28 z-50 m-auto">

            <main className="flex flex-wrap items-start justify-between content-end gap-4 min-h-screen mb-20" ref={navData.whoIam}>
                {/* profile */}
                <div className='flex w-full	white-box grow'>
                    <div className="w-72">
                        <img src={profileImg} alt="" />
                    </div>
                    <div className="w-full text-left ml-12 mt-3">
                        <p className="font-medium text-6xl text-gray-700">LEE DABIN</p>
                        <h2 className="tit border-b-2 mt-6">Channels</h2>
                        <ul className='mt-5'>

                            <li className="mt-2 cursor-pointer">
                                <a href="mailto:mangorovski@gmail.com" target="_blank"><span className="s_tit mr-5">Email</span></a>
                                <span>mangorovski@gmail.com</span>
                            </li>
                            <li className="mt-4 cursor-pointer">
                                <ul className="flex min-w-full gap-x-4	mt-3">
                                    <li>
                                        <a href="https://github.com/dabin-lee" target="_blank"><span className="s_tit">Github</span></a>
                                    </li>

                                    <li>
                                        <a href="https://2mango.tistory.com" target="_blank"><span className="s_tit">Blog</span></a>
                                    </li>

                                    <li>
                                        <a href="https://www.notion.so/488f725816a94e49bf2eefd485d1bdb3" target="_blank"><span className="s_tit">Notion</span></a>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                </div>

                {/* intrudoce */}
                <div className='white-box w-7/12'>
                    <p className="tit mb-4">About me</p>
                    <p>안녕하세요. 이다빈입니다.</p>
                    <ul className="mt-3 leading-7">
                        <li>* 협조를 잘 하고 성실함과 책임감을 갖고 있습니다. </li>
                        <li>* 기억을 위한 기록을 습관처럼하는 편입니다. </li>
                        <li>* 문제 상황에서 변화를 추구하기 보다 체계적으로 해결계획을 세우는 편입니다. </li>
                        <li>* 즐거움을 좋아하고 걱정이 없는 삶을 갈망하고 있습니다. </li>
                    </ul>
                </div>

                {/* Personal */}
                <div className='white-box grow self-stretch'>
                    <p className="tit border-b-2">Personal</p>
                    <div className="flex">
                        <ul className="mt-4">
                            <li>🎂 1991.06.18</li>
                            <li className="mt-2">🏠 경기도 고양시 덕양구</li>
                            <li className="mt-2">💻 웹 퍼블리셔 3년</li>
                        </ul>
                    </div>
                </div>


                {/* Personal */}
                <div className='white-box grow'>
                    <p className="tit border-b-2">Contact Info</p>
                    <div className="flex">
                        <ul className="mt-4">
                            <li className="mt-2">
                                <span className="s_tit mr-3">email</span>
                                <span>ldabinn@gmail.com</span>
                            </li>
                            <li className="mt-2">
                                <span className="s_tit mr-3">phone</span>
                                <span>010.3088.1818</span>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* 나의 키워드 */}
                <div className='white-box w-2/4	self-stretch'>
                    <p className="tit border-b-2">Keyword</p>
                    <div className="mt-4">
                        <Tag color="magenta">끊임없는학습</Tag>
                        <Tag color="red">동물사랑</Tag>
                        <Tag color="volcano">질문하는</Tag>
                        <Tag color="orange">성실한</Tag>
                        <Tag color="gold">정리덕후</Tag>
                        <Tag color="gold">집순이</Tag>
                        <Tag color="geekblue">낯가림</Tag>
                        <Tag color="green">목적의식</Tag>
                        <Tag color="green">협력</Tag>
                        <Tag color="geekblue">현실주의자</Tag>
                    </div>
                </div>

                <div className="flex flex-auto gap-4 self-stretch">
                    <div className="grow">
                        {/* Education */}
                        <div className='white-box'>
                            <p className="tit border-b-2">Education</p>
                            <ul className="mt-4 leading-7">
                                <li>학점은행제 평생교육진흥원 경영학사</li>
                                <li>과외/ 강의를 병행하며 공부 중<EditOutlined className="align-baseline ml-1" /></li>
                            </ul>
                        </div>

                        {/* License */}
                        <div className='white-box mt-4'>
                            <p className="tit border-b-2">License</p>
                            <div className="mt-5">
                                <ul className="mt-3 leading-7">
                                    <li>GTQ 1급 / 웹 디자인 기능사</li>
                                    <li>JLPT(Japanese-Language Test) 2, 3급</li>
                                </ul>
                            </div>
                        </div>

                        {/* stack */}
                        <div className='bg-white p-6 mt-4'>
                            <p className="tit border-b-2">📚 Stack</p>
                            <div className="mt-3">
                                <div className="stack">
                                    <p><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="" /></p>
                                    <p><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="" /></p>
                                    <p><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="" /></p>
                                    <p><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="" /></p>
                                    <p><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" /></p>
                                </div>
                                <div className="mt-4">
                                    <p>경험 & 학습</p>
                                    <div className="stack">
                                        <p><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" /></p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>Group</p>
                                    <div className="stack">
                                        <p><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Sketch-FFB387?style=for-the-badge&logo=sketch&logoColor=black" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Notion-1877F2?style=for-the-badge&logo=notion&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experiences */}
                    <div className='bg-white p-6 w-3/5	'>

                        <p className="tit border-b-2">Experiences</p>
                        <div className="mt-8">

                            <Timeline mode="alternate">
                                <Timeline.Item color="gray">2013. - 2017 <br />온라인 마케팅 부서 <br />웹 디자인 근무</Timeline.Item>
                                <Timeline.Item color="gray">2017. - 2018 <br />개인 쇼핑몰 운영</Timeline.Item>
                                <Timeline.Item color="gray">2018.06 - 2019.06 <br />비즈니스 일본어 어학연수 <br /> 일본 취업 활동</Timeline.Item>
                                {/* <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    취업을 목적으로 일본에서 비즈니스 일본어 클래스를 어학연수와 취업 활동
                                </Timeline.Item> */}


                                {/* <Timeline.Item>2019.04 - 2019.11 <br />UX/UI 교육 이수</Timeline.Item>
                                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    퍼블리싱 능력을 함양시키기 위한 교육과정 참여 HTML, CSS3, javascript이론, jqeury 응용을 학습
                                </Timeline.Item> */}

                                <Timeline.Item color="gray">2019.12 - 2022.08<br /> (주) 아이파트너즈 입사 <br />UX부서 웹 퍼블리싱 업무<br />KB국민카드 디지털 채널 운영</Timeline.Item>
                                {/* <Timeline.Item>UX부서 웹 퍼블리싱 업무</Timeline.Item> */}
                                {/* <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                UX부서 웹 퍼블리싱<br />
                                    사내 인트라넷 고도화, 코딩 컨벤션 작업, 웹 접근성과 웹 표준 검사 참여
                                </Timeline.Item> */}

                                {/* <Timeline.Item color="orange">2020.12 - 2022.08<br />KB국민카드 디지털 채널 운영</Timeline.Item> */}
                                {/* <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    국민카드 이벤트 관련 웹 퍼블리싱, 유지보수
                                </Timeline.Item> */}
                                <Timeline.Item color="gray">2022.08.10 <br /> (주) 아이파트너즈 퇴사</Timeline.Item>
                            </Timeline>
                        </div>
                    </div>
                </div>



            </main >

            <Experiences />
            <Project />

            <Footer />
        </div >
    )
}

export default Main