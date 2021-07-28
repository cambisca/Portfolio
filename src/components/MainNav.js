import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import { Link } from 'react-scroll';
import brooklynBridgePark from '../images/BBP_shot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiFillGithub } from '@fortawesome/free-brands-svg-icons';



function MainNav(){

    const [ visible, setVisible ] = useState(false)
    const { 
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const [ successMessage, setSuccessMessage] = useState("");

    const serviceID = "service_ID";
    const templateID = "template_ID"
    const userID = "user_U63Q8rTW6VUoEXNeEwEJN";
    

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

    function onSubmit(data, r){
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name, 
                email: data.email, 
                subject: data.subject, 
                message: data.message
            }, 
            userID
            )
            r.target.reset();
    }

    function sendEmail(serviceID, templateID, variables, userID) {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(successfulSend)
          .catch(err => console.error(`Something went wrong ${err}`));
    }
    
    const successfulSend = () => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
        setVisible(true);
    
        setTimeout(() => {
          setSuccessMessage("");
          setVisible(false);
        }, 4000);
    };
    

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
                        <li><Link offset={-110} smooth={true} to="showcase" href="#">Home</Link></li>
                        <li><Link offset={-62} smooth={true} to="about-me" href="#">About</Link></li>
                        <li><Link offset={-100} smooth={true} to="projects-container" href="#">Projects</Link></li>
                        <li><Link offset={-80} smooth={true} to="languages" href="#">Languages</Link></li>
                        <li><Link offset={-62} smooth={true} to="contact" href="#">Contact</Link></li>
                        <li><Link offset={-110} class="resume-select" href="#"> Resume </Link></li>
                    </ul>    
                </nav>
            </header>

            
            <section id="showcase">
                <div id="showcase__content">
                    <h1 class="showcase__content--title"> Cameron Bisca </h1>
                    <p class="showcase__content--para"> Front End Developer </p>
                </div>
            </section>

            <section class="about-me-wrapper">
                <section id="about-me">
                    <div class="about-me__image-box">
                        <img class="about-me__image" src='https://avatars.githubusercontent.com/u/69369814?s=400&u=d66d868b4818253cdc811b47ed9745219eb96709&v=4' alt="Cam" />
                    </div>

                    <div class="about-me__content">
                        <h2 class="about-me__content--title"> About Me </h2>
                        <p class="about-me__content--para"> 
                            Yo! I'm Cameron but I usually go by Cam. I am a Brooklyn boy and software engineer with a passion for expressive front end development. 
                            
                            <br/>
                            <br/>
                            
                            Before discovering my love for development I studied acting at various conservatories. It was at those institutions where I became fascinated by relationships and the motives/objectives of individuals. 

                            <br/>
                            <br/>

                            This kind of education led me to where I am present day. Today, I aim to build applications that are not only useful but expressive and in adjustment. 

                            <br/>
                            <br/>

                            When I've logged off you can find me on a basketball court, in a theatre, music venue, cocktail bar or hiking trail :) 
                        </p>
                    </div>
                </section>
            </section>

            <section className="projects-container">
                <section id="projects">
                    <h1 class="projects-header"> My Apps </h1>
                    <div class="project-list">
                        <div className="project__card">
                            {/* <h1 className="text-uppercase text-center py-5">I Got Next</h1> */}
                            
                            <img className="portfolio-image" src={brooklynBridgePark} alt="I Got Next project" />
                            <div class="overflow"> 
                                {/* <FontAwesomeIcon icon={faSearchPlus}/> */}
                            </div>
                           
                        </div>

                        <div className="project__card">
                            {/* <h1 className="text-uppercase text-center py-5">Discourse</h1> */}
                            
                            <img className="portfolio-image" src={brooklynBridgePark} alt="Discourse project"/>
                            <div class="overflow"> </div>
                            
                        </div>
                    </div>
                </section>
            </section>

            <section id="language-container">
                <section id="languages">
                    <h1 class="languages-header"> Technologies </h1>

                    <div class="language-list">
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
                    </div>
                </section>
            </section>

            <section id="contact">
                <div class="contact-header-box">
                    <h1 class="contact-header"> Give me a shout </h1>
                    <p class="contact-header--para"> Fill out the form and I'll get back to you ASAP! </p>
                </div>

                <form class="contact__form" onSubmit={handleSubmit(onSubmit)}>
                <span class="success-message"> { visible ? successMessage : null } </span>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name"
                        {
                            ...register('name', { required: "Please enter your name" })
                        }
                    />
                    <span class="error-message"> 
                        {errors.name && errors.name.message} 
                    </span> 
                    
                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        {...register("email", {
                            required: "Please provide your email",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email format",
                            },
                          })}
                    />
                    <span class="error-message"> 
                        {errors.email && errors.email.message} 
                    </span> 
                    
                    <input 
                        type="text" 
                        placeholder="Subject" 
                        name="subject" 
                        {
                            ...register('subject', { required: "Please enter a subject" })
                        }   
                    />
                    <span class="error-message"> 
                        {errors.subject && errors.subject.message} 
                    </span> 
                    
                    <textarea 
                        type="message" 
                        name="message"
                        {
                            ...register('message', { required: "Please enter your message " })
                        }
                    />
                    <span class="error-message"> 
                        {errors.message && errors.message.message} 
                    </span> 
                    
                    <input class="contact-form-submit" type="submit" value="Submit" />
                </form>
            </section>
        </main>
    )
}

export default MainNav;