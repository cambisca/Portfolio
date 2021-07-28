import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';


function SideNav(){
    return (
        <aside id="side-nav">
            <div class="side-nav-content">
                <div class="side-nav-content--logo">
                    <h1 class="logo"> CB </h1>
                </div>
                <ul class="side-nav-content--social">

                    <a href="https://www.linkedin.com/in/cameron-bisca/">
                        <FontAwesomeIcon icon={faLinkedin}  />
                    </a>
                    
                    <a href="https://github.com/cambisca">
                        <FontAwesomeIcon icon={faGithub} color="green" />
                    </a>

                    <a href="https://cjbisca.medium.com/">
                        <FontAwesomeIcon icon={faMedium} />
                    </a>
                    
                </ul>
            </div>
        </aside>
    )
}

export default SideNav;