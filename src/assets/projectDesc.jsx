import React from "react";

function ProjectDesc() {
  return (
    <div className="desc">
      <p>👇로그인/ 회원가입 화면</p>
      <div className="flex gap-3">
        <img
          src="https://user-images.githubusercontent.com/57528886/204869710-d7d737dd-680c-4c7c-a254-1204184699bc.png"
          width="350"
          alt="siteimg"
        />
        <img
          src="https://user-images.githubusercontent.com/57528886/204869838-6edb1187-c3a5-44e5-b04a-d09200ad0974.png"
          width="415"
          alt="siteimg"
        />
      </div>

      <p className="mt-3">👇메인 화면</p>
      <div>
        <img
          width="763"
          alt="signUp_page"
          src="https://user-images.githubusercontent.com/57528886/204869407-9e82fa36-2545-41da-8928-cf62d0bf8df4.png"
        />
      </div>

      <h2>☕ Description✨</h2>
      <p className="content bg-amber-50">
        반려인이라면 공감 할 수 있는, 어딜 가든 항상 반려동물 동반 기준으로
        검색하지 않으시나요? <br />
        반려인에겐 여전히 반려동물과 함께 하는 삶이 쉽지않아요.
        <br />
        <br />
        펫 마킹은 나의 반려 동물과 함께 갈 수 있는 장소를 찾아주는 서비스
        입니다. <br />
        키워드를 통해 'pet'에 관련된 장소, 동물 출입이 가능한 장소를 찾아주는 웹
        사이트 입니다.
        <br />
        저장했던 장소를 북마크에서 다시 찾을 수 있습니다.
        <br />
        <br />
        강아지가 흔히 자신의 영역을 표시하는 용어를 '마킹'을 한다고 하죠.
        <br />
        영감을 두어 이 프로젝트의 이름은 펫 마킹입니다 :)
      </p>

      <h2>간단한 사용 방법</h2>
      <ul className="content">
        <li>
          - 검색창에 장소 혹은 원하는 키워드로 검색을 한다. ex) 을지로, 동반,
          카페, 식당 등
        </li>
        <li>
          - 맵에서 마커로 표시 된 목록은 하단 추천장소 리스트에 출력 된다.
        </li>
        <li>- 또는 지도에 있는 마커를 누르면 해당 업체 정보 모달 창이 뜬다.</li>
        <li>- 마음에 드는 장소를 찾았다면 북마크를 누른다.</li>
        <li>- 북마크안에 리스트를 지우고 싶을 땐 하트표시를 제거해준다.</li>
      </ul>

      <div className="flex mt-4">
        <div>
          <h2>⏰ 개발 기간✨</h2>
          <p className="content mr-4">2022.10.01 - 2022.12.01</p>
        </div>

        <div>
          <h2>🎄 페이지 구성✨</h2>
          <div className="content mr-4 px-4 border-r-2 border-l-2">
            <ul className="pageList">
              <li>
                <p>&middot; header</p>
                <p className="pl-3">- nav</p>
              </li>
              <li>
                <p>&middot; main</p>
                <ul className="pl-3">
                  <li>- map</li>
                  <li>- Bookmark List</li>
                  <li>- Store List</li>
                </ul>
              </li>
              <li>
                <p>&middot; user</p>
                <p className="pl-3">- user Infomation</p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2>구현 기능✨</h2>
          <ul className="content mr-4">
            <li>1. 로그인/ 로그아웃</li>
            <li>2. 회원가입</li>
            <li>3. 장소 검색</li>
            <li>4. 장소 북마크</li>
          </ul>
        </div>
        <div>
          <h2>📝 사용기술 및 언어✨</h2>

          <div className="flex border">
            <div className="p-2">
              <h3>[FrontEnd]</h3>
              <ul>
                <li>Javascript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="p-2 border-r-2 border-l-2">
              <h3>[library]</h3>
              <ul>
                <li>recoil</li>
                <li> chakra Ui</li>
                <li>emotion style</li>
                <li> fortawesome</li>
                <li> react-hooks-form</li>
                <li>react-router-dom</li>
                <li> swiper</li>
              </ul>
            </div>
            <div className="p-2">
              <h3>[Backend]</h3>
              <ul>
                <li>Express</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>세부 기능 명세✨</h2>
      <div className="content">
        <h3 className="text-lg">🗣️ client</h3>
        <ul className="content">
          <li>
            <h4>1. 로그인/ 로그아웃 / 회원가입</h4>
            <ul className="pl-2">
              <li>- 사용자 세션유지를 위해 로컬스토리 액세스토큰 저장</li>
              <li>- 로그인 유지 기능: 액세스토큰의 수명을 365로 지정해줌</li>
            </ul>
          </li>
          <li>
            <h4>2. 장소 검색</h4>
            <ul className="pl-2">
              <li>- 카카오 map API를 이용하여 키워드를 통한 장소 검색</li>
              <li>- 지도에 표시된 관련 업체들을 하단 리스트로 확인 가능 </li>
              <li>
                - map에 있는 marker를 누르면 해당 업체에 대한 상세 모달창이 열림
              </li>
            </ul>
          </li>
          <li>
            <h4>3. 장소 북마크</h4>
            <ul className="pl-2">
              <li>- 북마크가 된 정보는 메인화면에 북마크 리스트에 출력 됨</li>
              <li>- 모달창에 있는 북마크 버튼을 누르면 Bookmark에 추가 </li>
              <li>- 북마크내에서 하트표시로 data 삭제</li>
            </ul>
          </li>
          <li>
            <h4>4. 그 외</h4>
            <ul className="pl-2">
              <li>- 외부 API 서비스 unsplash 사용</li>
              <li>
                - kakao 에서 제공하지 않는 업체 이미지를 넣기위해 랜덤 이미지를
                unsplash에서 가져옴.{" "}
              </li>
              <li>
                - unsplash 이미지 검색시 관련 이미지만을 추출하기 위해 검색 조건
                query를 사용('pet', 'food')
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="text-lg mt-4">🌐 server</h3>
        <ul className="content">
          <li>- AWS </li>
          <li>- EC2, S3 사용</li>
          <li>- github을 이용한 서버 배포(수동 배포)</li>
          <li>- pm2를 이용해서 express 서버 백그라운드 실행</li>
          <li>- MongoDB ATLAS 이용</li>
          <li>- JWT 토큰을 이용한 사용자 인증 처리</li>
          <li>
            - bcrypt를 이용한 사용자 비밀번호 암호화 처리 및 비밀번호 인증 구현
          </li>
        </ul>
      </div>

      <h2> 📚 STACKS✨</h2>

      <div className="content">
        <div className="stack">
          <img src="https://img.shields.io/badge/html-ededed?style=for-the-badge&logo=html5&logoColor=E34F26" />
          <img src="https://img.shields.io/badge/css-ededed?style=for-the-badge&logo=css3&logoColor=1572B6" />
          <img src="https://img.shields.io/badge/javaScript-ededed?style=for-the-badge&logo=javaScript&logoColor=F7DF1E" />
        </div>

        <div className="stack">
          <img src="https://img.shields.io/badge/react-ededed?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/ReactRouter-ededed?style=for-the-badge&logo=ReactRouter&logoColor=CA4245" />
          <img src="https://img.shields.io/badge/recoil-ededed?style=for-the-badge&logo=recoil&logoColor=0075EB" />
        </div>

        <div className="stack">
          <img src="https://img.shields.io/badge/npm-ededed?style=for-the-badge&logo=npm&logoColor=2C8EBB" />
          <img src="https://img.shields.io/badge/Axios-ededed?style=for-the-badge&logo=Axios&logoColor=5A29E4" />
        </div>

        <div className="stack">
          <img src="https://img.shields.io/badge/AWS-ededed?style=for-the-badge&logo=AmazonAWS&logoColor=E34F26" />
          <img src="https://img.shields.io/badge/MongoDB-ededed?style=for-the-badge&logo=MongoDB&logoColor=F7DF1E" />
          <img src="https://img.shields.io/badge/Node.js-ededed?style=for-the-badge&logo=Node.js3&logoColor=1572B6" />
          <img src="https://img.shields.io/badge/Mongoose-ededed?style=for-the-badge&logo=Mongoose&logoColor=F7DF1E" />
        </div>
      </div>
    </div>
  );
}

export default ProjectDesc;
