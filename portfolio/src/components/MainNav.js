import React, { useState } from 'react';

function MainNav(){

    const [hamburgerMenu, setHamburgerMenu] = useState(false)

    function hamburgerMenuClick(e){
        e.target.parentNode.classList.toggle('clicked')
    }

    // let hamburgerClass;
    // if (hamburgerMenu) {
    //     let hamburgerClass = 'clicked'
    // } else {
    //     let hamburgerClass = 'header-main-nav'
    // }

    return (
        <main>
            <header id="header">
                <nav id='header-main-nav'>
                    <div class="header-main-nav--hamburger" onClick={hamburgerMenuClick}>
                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                    </div> 
                     
                    <ul class="header-main-nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Hire Me</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    
                    
                </nav>
            </header>
        </main>
    )
}

export default MainNav;