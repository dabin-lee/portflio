import React, { useContext, useEffect, useState } from 'react'
import { NavContext } from '../context/navContext'
import { ClockCircleOutlined, EditOutlined } from '@ant-design/icons';
export const Nav = () => {

    const navData = useContext(NavContext)
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])


    const moveScroll = (e) => {
        console.log(e)
        const whereDom = e.value
        switch (whereDom) {
            case "자기소개":
                window.scrollTo({ top: 0, behavior: 'smooth' })
                // navData.whoIam.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case "경력사항":
                navData.career.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case "프로젝트":
                navData.project.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
        }
    }
    const handleScroll = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };


    return (
        <div className={`fixed top-0 h-16 w-full pr-4 py-1 mb-2 z-10 text-gray-600 border-b bg-gray-30 bg-slate-300 duration-700 ease-in ${scroll && 'backdrop-blur-md bg-white/30'}`}>
            <div className="w-10/12 h-full m-auto flex items-center justify-end">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>자기소개</button>
                <button className="ml-5 blur-none" onClick={() => handleScroll(navData.career.current)}>경력사항</button>
                <button className="ml-5 blur-none" onClick={() => handleScroll(navData.project.current)}>프로젝트</button>
            </div>

        </div>
    )
}
