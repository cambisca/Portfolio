import React, { useState } from 'react';
import ToolboxCarousel from './ToolboxCarousel';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import { Link } from 'react-scroll';
import discourse from '../images/Discourse.jpeg';
import i_got_next from '../images/I-GOT-NEXT.jpeg'



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

    const randomRgb = () => {
        const red = Math.floor(Math.random() * 256) 
        const green = Math.floor(Math.random() * 256) 
        const blue = Math.floor(Math.random() * 256) 

        return `rgb(${red}, ${green}, ${blue})`
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
                        <li>
                            <Link 
                                offset={-110} 
                                smooth={true} 
                                to="showcase" 
                                href="#"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link 
                                offset={-62} 
                                smooth={true} 
                                to="about-me" 
                                href="#"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link 
                                offset={-100} 
                                smooth={true} 
                                to="projects-container" 
                                href="#"
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link 
                                offset={-80} 
                                smooth={true} 
                                to="toolbox" 
                                href="#"
                            >
                                Toolbox
                            </Link>
                        </li>

                        <li>
                            <Link 
                                offset={-62} 
                                smooth={true} 
                                to="contact" 
                                href="#"
                            >
                                Contact
                            </Link>
                        </li>

                        <li>
                            <a 
                                offset={-110} 
                                class="resume-select" 
                                href="#"
                            > 
                                Resume 
                            </a>
                        </li>
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
                            Yo! I'm Cameron but I usually go by Cam. I am a Brooklyn boy and software engineer with a passion for creative frontend development. 
                            
                            <br/>
                            <br/>
                            
                            Before discovering my love for development I studied acting at various conservatories. It was at those institutions where I became fascinated by relationships and the motives/objectives of individuals. 

                            <br/>
                            <br/>

                            Today, I aim to build applications that are not only useful but expressive and in adjustment. 

                            <br/>
                            <br/>

                            When I've logged off you can find me on a basketball court, hiking trail, in a theatre, music venue, or cocktail bar :) 
                        </p>
                    </div>
                </section>
            </section>

            <section className="projects-container">
                <div id="projects">
                    <h1 class="section-headers"> My Work </h1>
                    <div class="project-list">
                        <div className="project__card"> 
                            <img className="portfolio-image" src={i_got_next} alt="I Got Next project" />

                            <div class="overflow"> 
                                <div class="project-description-box">
                                    <p class="project-description"> 
                                        I GOT NEXT provides real time activity for basketball courts so users can find a court that fits their needs on a given day. 
                                    </p>
                                </div>
                                <div class="project-links-box"> 
                                    <span> 
                                        <a class="project-link" href="https://github.com/cambisca/I-got-next-front"> Frontend </a> 
                                    </span>

                                    <span> 
                                        <a class="project-link" href="https://github.com/cambisca/I-got-next-back"> Backend </a> 
                                    </span>

                                    <span> 
                                        <a class="project-link" href="https://www.loom.com/share/c0c70984952141d5805377f34aaedb1b"> Demo </a> 
                                    </span>
                                </div>
                            </div>
                           
                        </div>

                        <div className="project__card">
                            <img className="portfolio-image" src={discourse} alt="Discourse project"/>
                            
                            <div class="overflow"> 
                                <div class="project-description-box">
                                    <p class="project-description"> 
                                        A chatting app that encourages meaningul discourse between people who have common interests yet differing beliefs. 
                                    </p>
                                </div>
                                <div class="project-links-box"> 
                                    <span> 
                                        <a class="discourse-link project-link" href="https://github.com/jpersons24/discourse/tree/main/discourse-react"> Frontend </a> 
                                    </span>
                                    |
                                    <span> 
                                        <a class="discourse-link project-link" href="https://github.com/jpersons24/discourse-rails/tree/771dd677f37de567ac36dae6d9c704d1475992ce"> Backend </a> 
                                    </span>
                                    |
                                    <span> 
                                        <a class="discourse-link project-link" href="https://discourseapp.netlify.app/"> Site </a> 
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            
            <section id="toolbox">
                <h1 class="section-headers"> TOOL BOX </h1>
                <div class="toolbox-container">
                    <div class="toolbox-content"> 
                        <ToolboxCarousel />
                    </div>
                </div>
            </section>

            {/* <section id="contact">
                <div class="contact-header-box">
                    <h1 class="section-headers"> Give me a shout </h1>
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
                    
                    <input type="submit" value="submit" />
                </form> 
            </section>*/}
            <section id="contact">
                <div class="contact-header-box">
                    <h1 class="section-headers"> Give me a shout </h1>
                    <p class="contact-header--para"> Fill out the form and I'll get back to you ASAP! </p>
                </div>

                <form class="contact__form" class="contact__form" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="text" 
                        placeholder="Name"
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
                        placeholder="Leave a message"
                        {
                            ...register('message', { required: "Please enter your message " })
                        }
                    ></textarea>
                    <span class="error-message"> 
                        {errors.message && errors.message.message} 
                    </span> 

                    <input type="submit" value="submit" />
                </form>
            </section>

            <section id="footer">
                <div class="footer-box"> 
                        <h3 class="footer-content"> COPYRIGHT © 2021 CAMERON BISCA | ALL RIGHTS RESERVED </h3>
                </div>
            </section>
        </main>
    )
}

export default MainNav;