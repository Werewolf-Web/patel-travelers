import React, { useRef } from 'react';
import navCSS from './../Nav/Nav.module.css'

function Nav() {

    const menu =useRef();

    const MenuHandler=() =>{
        menu.current.classList.toggle(navCSS.activeMenu);
    }

    return (
        <div className={navCSS.Nav_wrapper}>
            <div className={navCSS.logo}>
                <a href="#">Patel travel</a>
            </div>
            <ul ref={menu}> 
                <li><a href="#">Home</a></li>
                <li><a href="#">Trips</a></li>
                <li><a href="#">Destination</a></li>
                <li><a href="#">Searches</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Popular Place</a></li>
            </ul>
            <div className={navCSS.nav_btns}>
                <div className={navCSS.search_wrapper}>
                    <i class="ri-search-line"></i>
                    <input type="text" placeholder='search here' />
                </div>
                <div className={navCSS.CallBtn}>
                    <i class="ri-phone-line"></i>
                  <p>+91 9876543212 <small>call your travel agent</small></p>
                </div>
                <i class="ri-menu-2-line" onClick={MenuHandler} id={navCSS.bars}></i>
            </div>
        </div>
    )
}

export default Nav


