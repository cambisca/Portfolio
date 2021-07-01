import React, { useState } from 'react';

function MainNav(){

    const [hamburgerMenu, setHamburgerMenu] = useState(false)

    function hamburgerMenuClick(e){
        if (e.target.parentNode.id) {
            e.target.parentNode.classList.toggle('clicked')
            e.target.parentNode.childNodes[1].childNodes.forEach((link) => {
                link.classList.toggle('fade')
            })
            console.log(e.target.parentNode.childNodes[1].childNodes)
        } else if (e.target.parentNode.parentNode.id) {
            e.target.parentNode.parentNode.classList.toggle('clicked')
            e.target.parentNode.parentNode.childNodes[1].childNodes.forEach((link) => {
                link.classList.toggle('.fade')
            })
            console.log(e.target.parentNode.parentNode.childNodes[1].childNodes[0])
        } 
        

    }

    

    return (
        <main>
            <header id="header">
                <nav id='header-main-nav'>
                    <div class="header-main-nav--hamburger" onClick={hamburgerMenuClick}>
                        <div class="line line-1" ></div>
                        <div class="line line-2" ></div>
                        <div class="line line-3" ></div>
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

            <section id="showcase">
                <div id="showcase__content">
                    <h1 class="showcase__content--title"> Cameron Bisca </h1>
                    <p class="showcase__content--para"> Full Stack Developer </p>
                    <a href="#" class="showcase__content--link"> My Work </a>
                </div>

            </section>

            <section id="projects">
                <div class="project__card">
                    <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/07/11/brooklyn-manhattan-bridge.jpg?width=1200&auto=webp&quality=75" alt="poster" />
                </div>

                <div class="project__card">
                    <img src="https://travelforlifenow.com/travelforlifenow.com/uploads/2019/07/Jefferson-St-Bushwick-June-2019-tny.jpg" alt="poster" />
                </div>

                <div class="project__card">
                    <img src="https://patch.com/img/cdn20/users/22926829/20170623/095152/styles/raw/public/article_images/bed_stuy_kathleen_culliton-1498225756-7379.jpg" alt="poster" />
                </div>

                <div class="project__card">
                    <img src="https://patch.com/img/cdn20/users/22926829/20170623/095152/styles/raw/public/article_images/bed_stuy_kathleen_culliton-1498225756-7379.jpg" alt="poster" />
                </div>

                <div class="project__card">
                    <img src="https://patch.com/img/cdn20/users/22926829/20170623/095152/styles/raw/public/article_images/bed_stuy_kathleen_culliton-1498225756-7379.jpg" alt="poster" />
                </div>

                <div class="project__card">
                    <img src="https://patch.com/img/cdn20/users/22926829/20170623/095152/styles/raw/public/article_images/bed_stuy_kathleen_culliton-1498225756-7379.jpg" alt="poster" />
                </div>
            </section>
        </main>
    )
}

export default MainNav;
