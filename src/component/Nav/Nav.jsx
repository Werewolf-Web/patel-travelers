import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import navCSS from './../Nav/Nav.module.css'

function Nav() {

    const menu =useRef();

    const MenuHandler=() =>{
        menu.current.classList.toggle(navCSS.activeMenu);
    }

    return (
        <div className={navCSS.Nav_wrapper}>
            <div className={navCSS.logo}>
                <Link to="/">Patel travel</Link>
            </div>
            <ul ref={menu}> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tours">Trips</Link></li>
                <li><Link to="/">Destination</Link></li>
                <li><Link to="/">Searches</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/details">Popular Place</Link></li>
            </ul>
            <div className={navCSS.nav_btns}>
                <div className={navCSS.search_wrapper}>
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder='search here' />
                </div>
                <div className={navCSS.CallBtn}>
                    <i className="ri-phone-line"></i>
                  <p>+91 9876543212 <small>call your travel agent</small></p>
                </div>
                <i className="ri-menu-2-line" onClick={MenuHandler} id={navCSS.bars}></i>
            </div>
        </div>
    )
}

export default Nav


