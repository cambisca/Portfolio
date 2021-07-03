import { faImages } from '@fortawesome/free-solid-svg-icons';
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
                    <div>
                        <h1 class="logo"> CB </h1>
                    </div>
                    
                    <div class="header-main-nav--hamburger" onClick={hamburgerMenuClick}>
                        <div class="line line-1" ></div>
                        <div class="line line-2" ></div>
                        <div class="line line-3" ></div>
                    </div> 
                     
                    <ul class="header-main-nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Languages</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a class="resume-select" href="#"> Resume </a></li>
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

            <section id="about-me">
                <div class="about-me__image-box">
                    <img class="about-me__image" src='https://avatars.githubusercontent.com/u/69369814?s=400&u=d66d868b4818253cdc811b47ed9745219eb96709&v=4' alt="Cam" />
                </div>

                <div class="about-me__content">
                    <h2 class="about-me__content--title"> About Me </h2>
                    <p class="about-me__content--para"> 
                        Successful people know that true education is what you get for yourself and by yourself, it’s not what someone gives or tells you, they know that true success in life does not come by luck, a lucky man is not a successful man, true winners know that they must develop skills and acquire knowledge before becoming truly successful. 
                    </p>
                    <a class="about-me__content--link"> Read More </a>
                </div>
            </section>

            <div class="projects-header-box">
                <h2 class="projects-header"> Projects </h2>
            </div>

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

            <div class="languages-header-box">
                <h2 class="languages-header"> Technologies </h2>
            </div>

            <section id="languages">
                <div class="lang-card lang-1">
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--jvDLhx0b--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/cpcr5w0kgl6j94tss7n9.png" alt="Ruby on Rails"/>
                </div>

                <div class="lang-card lang-2">
                    <img src="https://sisnolabs.com/blog/wp-content/uploads/2020/09/reactjs.png" alt="React"/>
                </div>

                <div class="lang-card lang-3">
                    <img src="https://techvccloud.mediacdn.vn/zoom/650_406/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png" alt="JavaScript"/>
                </div>

                <div class="lang-card lang-4">
                    <img src="https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png" alt="HTML"/>
                </div>

                <div class="lang-card lang-5">
                    <img src="https://allvectorlogo.com/img/2016/04/css3-logo.png" alt="CSS"/>
                </div>
            </section>
            
            <section id="testimonials">
                <div class="testimonial-card">
                    <div class="testimonial-card--img">
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/07/11/brooklyn-manhattan-bridge.jpg?width=1200&auto=webp&quality=75" alt="I GOT NEXT" />
                    </div>

                    <div class="testimonial-card--content">
                        <h3 class="testimonial-card-content--title"> I GOT NEXT </h3>
                        <div class="testimonial-card-content--links">
                            <a href="#"> Demo </a>
                            <a href="#"> Netlify </a>
                            <a href="#"> Github </a>
                        </div>
                    </div>
                </div>

                <div class="testimonial-card">
                    <div class="testimonial-card--img">
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/07/11/brooklyn-manhattan-bridge.jpg?width=1200&auto=webp&quality=75" alt="Discourse" />
                    </div>

                    <div class="testimonial-card--content">
                        <h3 class="testimonial-card-content--title"> DISCOURSE </h3>
                        <p class="testimonial-card-content--para"> Demo Netlify Github </p>
                    </div>
                </div>

                <div class="testimonial-card">
                    <div class="testimonial-card--img">
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/07/11/brooklyn-manhattan-bridge.jpg?width=1200&auto=webp&quality=75" alt="The Actors Studio" />
                    </div>

                    <div class="testimonial-card--content">
                        <h3 class="testimonial-card-content--title"> THE ACTORS STUDIO</h3>
                        <p class="testimonial-card-content--para"> Demo Netlify Github </p>
                    </div>
                </div>
            </section>

            <section id="contact">
                <form class="contact__form">
                    <input type="text" placeholder="Name" />
                    
                    <input type="email" placeholder="Email" />
                    
                    <input type="text" placeholder="Subject" />
                    
                    <textarea type="message" />
                    
                    <input type="submit" value="submit" />
                </form>
            </section>
        </main>
    )
}

export default MainNav;
