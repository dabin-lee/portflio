import React from "react";
import netflix02 from './img/react-netflix_02.png'
import netflix03 from './img/react-netflix_03.png'

function ProjectDesc1() {
  return (
    <div className="desc">

      <h2>☕ Description✨</h2>
      <p className="content bg-lime-50 p-3">
      The movie DB API를 이용해서 만든 넷플릭스 웹 사이트입니다. <br />
      API url요청을 위해 Axios 인스턴스를 별도로 만들어 메인화면 이미지 배너에 사용하였습니다.   <br />
      반응형으로 제작되었고 검색 창을 입력시 useDebounce를 생성하여 시간을 제어했습니다.
      </p>

      <h2>📝 프로젝트 주요 기능</h2>
      <ul className="content">
        <li>- 메인페이지 랜덤으로 영화 정보(이미지, description, youtube 출력)</li>
        <li>- 클릭되는 영화 : 모달에서 영화 정보 확인 가능</li>
        <li>- 상단 input 입력시 관련 영화 검색 기능</li>
        <li>- 검색한 영화 클릭 시 상세페이지 이동(useNavigate)</li>
      </ul>

      <h2>⏰ 개발 기간✨</h2>
      <p className="content mr-4">2022.09 - 2022.11</p>
      
      <h2>📚  사용기술 및 언어✨</h2>

      <div className="flex">
        <div className="p-2">
          <h3>[language]</h3>
          <ul>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="p-2 border-r-2 border-l-2">
          <h3>[library]</h3>
          <ul>
            <li>axios</li>
            <li>styled-compoenets</li>
            <li>react-router-dom</li>
            <li>swiper</li>
          </ul>
        </div>
        <div className="p-2 border-r-2 border-l-2">
          <h3>[API]</h3>
          <ul>
            <li>The Movie DB API</li>
          </ul>
        </div>
      </div>
      

    <p className="mt-4">👇메인 화면</p>
      <div>
        <img
          src={netflix02}
          alt="siteimg"
        />
      </div>
      <p className="mt-4">👇연관 검색 페이지</p>
      <div>
        <img
          src={netflix03}
          alt="siteimg"
        />
      </div>
    </div>
  );
}

export default ProjectDesc1;
