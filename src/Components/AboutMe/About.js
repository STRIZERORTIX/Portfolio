import React from 'react';
import './About.css';
import Nav from '../Navbar/Nav';
import Dp2 from '../Images/DP2.png'
function About() {

    return(
        <>
            <Nav/>
            <div className="about-container">
                <div className="circle-5"></div>
                <div className="circle-6"></div>
                <div className="about-content">
                    <div className="column">
                        <div className="about-title">
                                <h2>This is me, Abhinandhan S 🚀 </h2>
                        </div>
                        <div className="about-para">
                            <p className="content">
                                A pre-final year student at Amrita Vishwa Vidyapeetham Chennai,
                                specializing in MERN Stack, UI Design, UX Research, Production Development,
                                and Graphic Designing. I'm passionate about creating user-friendly and
                                visually stunning digital experiences that solve real-world problems.
                                Over the years, I have participated in several hackathons, where I've
                                collaborated with talented individuals and won 3-4 events.
                                I'm also proud to be a Mentor at Toycathon'22, a Hackathon Conducted
                                by the MHRD, INDIA, where I help participants develop their digital creations.
                                In my free time, I love exploring new technologies and experimenting with
                                different design styles to expand my skill set. I'm always excited about
                                new opportunities and collaborations, so please don't hesitate to
                                contact me if you have any questions or would like to discuss a project.
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="about-DP">
                            <img src={Dp2} alt="DP" className="aboutPicD"/>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
export default About;