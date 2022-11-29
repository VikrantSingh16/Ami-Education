import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../../constants'

import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import sidebarNav from '../../configs/sidebarNav'

function Sidebar ({  user,
    setAuthState,
    setUser}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()

       
    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }


    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={images.logo} alt="" />
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-log-out'></i>
                    </div>

                    <button 
                onClick={signOutHandler}
                className='"sidebar__menu__item__txt"'>
                
                Logout
            </button>
                    {/* <div className="w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg"  onClick={signOutHandler}>
                        Logout
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
