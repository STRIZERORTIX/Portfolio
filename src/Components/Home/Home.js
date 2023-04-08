import React from 'react';
import './Home.css';
import Nav from '../Navbar/Nav';
import Dp1 from '../Images/DP1.png';
import fmail from '../Images/mail.png';
import fgithub from "../Images/github.png";
import flinkedin from "../Images/linkedin.png";
import finstagram from "../Images/instagram.png";
import UI from "../Images/UI.png";
import DEV from "../Images/DEV.png";
import AI from "../Images/AI.png";

function Home() {

    return(
        <>
            <Nav/>
            <div className="row">
                {/*Introduction*/}
                <div className="column-1">
                    <div className="circle-1"></div>
                    <div className="Intro-content">
                        <h3>Hello I’m</h3>
                        <h1>ABHINANDHAN S</h1>
                        <p>A Designer With 2 Years of experience<br />
                            in user interfaces, wireframe designing,<br />
                            brainstorming, Also into web exploitation,<br/>
                            development of software's and web app’s,<br />
                            currently into machine learning</p>
                    </div>
                </div>

                {/*Social Media*/}
                <div className="FMediaGroup">
                    <div className="Fmedia1">
                        <a href="mailto:abhi.varadan@gmail.com"
                           target="_blank"
                           rel="noreferrer">
                            <img className="fmail icon" src={fmail} alt="mail"/>
                        </a>
                    </div>
                    <div className="Fmedia1">
                        <a
                            href="https://www.instagram.com/strizer_ortix/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="finstagram icon" src={finstagram} alt="instagram"/>
                        </a>
                    </div>
                    <div className="Fmedia1">
                        <a href="https://github.com/STRIZERORTIX"
                           target="_blank"
                           rel="noreferrer">
                            <img className="fgithub icon" src={fgithub} alt="github"/>
                        </a>
                    </div>
                    <div className="Fmedia1">
                        <a
                            href="https://www.linkedin.com/in/strizerortix/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="flinkedin icon" src={flinkedin} alt="linkedin"/>
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    © 2022 - Abhinandhan S
                </div>

                {/*Display Picture*/}
                <div className="column-2">
                    <div className="HomePic">
                        <div className="circle-2"></div>
                        <div className="circle-3"></div>
                        <div className="DisplayPicture">
                            <img src={Dp1} alt="Display Picture" className="DP" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;