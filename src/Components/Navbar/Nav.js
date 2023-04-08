import React from 'react';
import './Nav.css';
const Navbar = () => {
    return(
        <>
            <nav>
                <div className="Logo">

                </div>
                <div className="Nav-links">
                    <li>
                        <a href="/"> Home </a>
                    </li>

                    <li>
                        <a href="/work">Work</a>
                    </li>
                    <li>
                        <a href="/aboutme">About Me</a>
                    </li>
                    {/*<div className="Talkmi" type="button" >*/}
                    {/*    <a>Let's Talk</a>*/}
                    {/*</div>*/}
                </div>

            </nav>
        </>

    );
};

export default Navbar;


