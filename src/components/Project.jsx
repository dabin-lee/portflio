import React, { useContext } from 'react'
import { NavContext } from '../context/navContext'

function Project() {
    const navData = useContext(NavContext)
    return (
        <div className="w-full h-auto bg-white p-8 mb-20" ref={navData.project}>
            <h2 className="tit">프로젝트</h2>
            <ul className="mt-8">
                <li>
                    <div>
                        <img src="https://miro.medium.com/max/1400/1*zBmPieDd4eXM2ZYlNm2sXg.png" alt="" />
                    </div>
                    <h3 className="project_tit">Pet Marking</h3>
                    <div className="cont">
                        <p className="s_tit w-full">서비스 소개: 반려견과 함께 동반할 수 있는 나만의 북마크를 확인하는 웹 사이트</p>
                        <ul className="ex_list p-5 px-8">
                            <li>작업 기간: 2020.02 - 2020.03 </li>
                            <li>개인 작업</li>
                            <li>Skills
                                HTML5
                                CSS3 / SCSS
                                JavaScript (ES6)/React/ recoil / Redux-Saga</li>
                            <li>동기들과 함께 각 페이지를 맡아 작업하였고 페이지 별 공통되는 영역에 대한 부분을 정리하며 코드를 줄여갔고, 컨벤션을 직접 작성하며 웹 접근성에 대한 능력을 키우게 되었습니다. </li>
                            <li>실무에 투입 전 실질적인 웹 서비스에 대한 즐거움을 경험하게 되고 의미론적인 구조와 웹 표준, 웹 호환성을 자연스럽게 고려하며 퍼블리싱을 할 수 있는 능력을 키우게 되었습니다. </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://miro.medium.com/max/1400/1*zBmPieDd4eXM2ZYlNm2sXg.png" alt="" />
                    </div>
                    <h3 className="project_tit">Pet Marking</h3>
                    <div className="cont">
                        <p className="s_tit w-full">서비스 소개: 반려견과 함께 동반할 수 있는 나만의 북마크를 확인하는 웹 사이트</p>
                        <ul className="ex_list p-5 px-8">
                            <li>작업 기간: 2020.02 - 2020.03 </li>
                            <li>개인 작업</li>
                            <li>Skills
                                HTML5
                                CSS3 / SCSS
                                JavaScript (ES6)/React/ recoil / Redux-Saga</li>
                            <li>동기들과 함께 각 페이지를 맡아 작업하였고 페이지 별 공통되는 영역에 대한 부분을 정리하며 코드를 줄여갔고, 컨벤션을 직접 작성하며 웹 접근성에 대한 능력을 키우게 되었습니다. </li>
                            <li>실무에 투입 전 실질적인 웹 서비스에 대한 즐거움을 경험하게 되고 의미론적인 구조와 웹 표준, 웹 호환성을 자연스럽게 고려하며 퍼블리싱을 할 수 있는 능력을 키우게 되었습니다. </li>
                        </ul>
                    </div>
                </li>
            </ul >
        </div >

    )
}

export default Project