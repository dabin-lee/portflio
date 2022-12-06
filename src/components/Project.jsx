import React, { useState, useContext } from "react";
import { NavContext } from "../context/navContext";
import { Button, Space, Modal } from "antd";
import img1 from "../assets/img/login-page.png";
import img2 from "../assets/img/netflix.png";
import ProjectDesc from "../assets/projectDesc";
import ProjectDesc1 from "../assets/projectDesc1";
// import {mkCont} from '../assets/mkfile/mk'

function Project() {
  const [size, setSize] = useState("large");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const navData = useContext(NavContext);
  return (
    <div className="w-full h-auto bg-white p-8" ref={navData.project}>
      <h2 className="tit">프로젝트</h2>

      <ul className="mt-8 project">
        <li>
          <div>
            <img src={img1} alt="" />
          </div>
          <h3 className="project_tit s_tit w-full">🐕‍🦺 Pet Marking</h3>
          <div>
            <ul className="ex_list p-5 px-8">
              <li>개인 작업</li>
              <li>작업 기간: 2022.10 - 2022.12 </li>
              <li>참여도 100%</li>
              <li>
                <div className="flex">
                  <p>서비스 소개:</p>
                  <p className="ml-2">반려견과 함께 동반할 수 있는 나만의 북마크를 확인하는 웹 사이트입니다. </p>
                </div>
              
              </li>
              <li>
                <div className="flex">
                  <p>좋았던 점:</p>
                  <p className="ml-2">제일 애정을 갖고 임했던 작업물입니다. <br />로그인 기능을 구현하면서 토큰 기반 인증에 대해 알게되어 JWT토큰 사용 인증방식을 활용했습니다. <br />서버를 직접 구축하고 AWS 배포까지 해보면서 발생했던 이슈의 원인들을 파악할 수 있게되었습니다.</p>
                </div>
              </li>
              <li>
                <div className="flex">
                  <p>아쉬웠던 점:</p>
                  <p className="ml-2">백엔드에 처음 공부했기에 참여도와 기여도를 나눴습니다. 네트워크에 대한 학습의 필요성을 많이 느끼게 된 계기였습니다.</p>
                </div>
              </li>
            </ul>

            <Space wrap className="pr-10 pb-8 pt-0 flex justify-end">
              <Button size={size} onClick={() => setOpen(true)}>
                README
              </Button>
              <Modal
                title="🐕‍🦺 Pet Marking"
                centered
                open={open}
                onCancel={() => setOpen(false)}
                width={1000}
              >
                  <ProjectDesc />
                <Button onClick={() => setOpen(false)} className="closeBtn">
                  닫기
                </Button>
              </Modal>
              <Button type="link" size={size} className="bg-slate-300">
                <a href="http://pet-marking-client.s3-website.ap-northeast-2.amazonaws.com/" target="_blank">WEB SITE</a>
              </Button>
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
              <li>개인 작업</li>
              <li>작업 기간: 2022.09 - 2022.11 </li>
              <li>참여도 100%</li>
              <li>
                <div className="flex">
                  <p>서비스 소개:</p>
                  <p className="ml-2">넷플릭스 웹 사이트 메인화면을 리액트
                  어플리케이션으로 만든 화면입니다. <br />
                  리액트에 대한 학습을 목적으로 강의를 참고로 활용했습니다. </p>
                </div>
              
              </li>
              <li>
                <div className="flex">
                  <p>좋았던 점:</p>
                  <p className="ml-2">외부 api를 통신이 많아서 가독성과 재 사용성을 고려한 로직을 짜는 연습을 했습니다. <br /> react-router-dom를 이용해서 useParams나 useNavigate등을 조금 더 집중적으로 공부할 수 있었습니다.</p>
                </div>
              </li>
            </ul>

            <Space wrap className="pr-10 pb-8 pt-0 flex justify-end">
              <Button size={size} onClick={() => setOpen2(true)}>
                README
              </Button>
              <Modal
                title="Netflix web site"
                centered
                open={open2}
                onCancel={() => setOpen2(false)}
                cancelText="닫기"
                width={1000}
              >
                <ProjectDesc1 />

              </Modal>
              <Button type="link" size={size} className="bg-slate-300">
                <a href="https://dabin-lee.github.io/react_netflix/" target="_blank">WEB SITE</a>
              </Button>
            </Space>
          </div>
        </li>
        </ul>
    </div>
    );
}

export default Project;
