import React, {useState, useEffect} from 'react';



function SideNav(){
    return (
        <aside id="side-nav">
            <div class="side-nav-content">
                <div class="side-nav-content--logo">
                    <h1 class="logo"> CB </h1>
                </div>
                <ul class="side-nav-content--social">
                    <a href="https://www.linkedin.com/in/cameron-bisca/"><i class="social-icons">L</i></a>
                    <a href="https://github.com/cambisca"><i class="social-icons">G</i></a>
                    <a href="https://cjbisca.medium.com/"><i class="social-icons">M</i></a>
                    
                </ul>
            </div>
        </aside>
    )
}

export default SideNav;