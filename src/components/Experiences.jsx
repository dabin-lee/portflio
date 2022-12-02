import React, { useContext } from 'react'
import { NavContext } from '../context/navContext'

function Experiences() {
    const navData = useContext(NavContext)
    return (
        <div className="w-full h-auto bg-white p-8 mb-20" ref={navData.career}>
            <h2 className="tit">경력 세부사항</h2>
            <ul className="mt-8">
                <li className="career_li">
                    <h3 className="project_tit">
                        사내 인트라넷 고도화
                        <p className='mt-1 text-lg'>2020.02 - 2020.03</p>
                    </h3>
                    <div className="cont">
                        <p className="s_tit w-full">
                            웹 기반 인트라넷 사이트 고도화 작업
                        </p>
                        <ul className="ex_list p-5 px-8">
                            <li>레거시 코드 시멘틱 마크업 레이아웃 리뉴얼</li>
                            <li>flex를 이용한 박스 모델 css 전환</li>
                            <li>본격적인 실무에 투입하기 전 웹 퍼블리싱에 대한 환경과 역량을 키우기 위해 참여하였습니다. </li>
                            <li>동기들과 함께 각 페이지를 맡아 작업하였고 페이지 별 공통되는 영역에 대한 부분을 정리하며 코드를 줄여갔고, 컨벤션을 직접 작성하며 웹 접근성에 대한 능력을 키우게 되었습니다. </li>
                            <li>실무에 투입 전 실질적인 웹 서비스에 대한 즐거움을 경험하게 되고 의미론적인 구조와 웹 표준, 웹 호환성을 자연스럽게 고려하며 퍼블리싱을 할 수 있는 능력을 키우게 되었습니다. </li>
                        </ul>
                    </div>
                </li>
                <li className="career_li mt-14">
                    <h3 className="project_tit">
                        KB국민카드 디지털 채널 운영 <br />웹 퍼블리싱 유지보수
                        <p className='mt-1 text-lg'>2020.12 ~ 2022.08</p>
                    </h3>
                    <div className="cont">
                        <ul>
                            <li className="list-inside">
                                <p className="s_tit w-full ">업무 내용: 웹 퍼블리싱 유지보수</p>
                                <p className="s_tit w-full mt-4">프로모션, 마이크로 사이트 웹 페이지 제작</p>
                                <ul className="ex_list p-2 px-8">
                                    <li>코로나 국민 생활지원금 신청 페이지_웹/ 모웹</li>
                                    <li>레고랜드 카드 페이지_모바일 웹</li>
                                    <li>임신&출산 지원 카드 페이지_웹/ 모웹</li>
                                </ul>
                            </li>
                            <li>
                                <p className="s_tit w-full mt-4">상시 업무</p>
                                <ul className="ex_list p-2 px-8">
                                    <li>SB기준 이벤트 산출물, 등급별 이메일 분기 페이지</li>
                                    <li>주간 별 메인 배너  Swiper 제작</li>
                                </ul>
                            </li>
                            <li>
                                <p className="s_tit w-full mt-4">검토 운영 팀 참여</p>
                                <ul className="ex_list p-2 px-8">
                                    <li>사이트 리뉴얼시 크로스브라우징 이슈,  UI의 기능 등 QA 검토를 상시로 진행하여 동작되지 않는 부분을 피드백하여 보완 할 수 있었습니다.</li>
                                    <li>HTML/CSS/JS 가이드 검수 작업을 참여하여  문서화의 수정사항을 제시, 개선하고 커뮤니케이션 역량을 길렀습니다.</li>
                                    <li>기업 페이지 웹 접근성 진단에 참여하여 대체 텍스트, 키보드 접근성에 대한 작업으로 인증을 부여받았습니다. </li>
                                </ul>
                            </li>
                            <li>- 업무 사용 툴: Jira, DevOn, spider, eclipse, Sketch</li>
                        </ul>
                    </div>
                </li >
            </ul >
        </div >

    )
}

export default Experiences