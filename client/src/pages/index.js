import React, { useEffect } from "react";
import "./style.css";


function About(props) {
    useEffect(() => {
        props.setPage("Portfolio")
        props.setUrl("/Portfolio")
        props.setText("If you would like to look at some of my projects, click below!")
    }, [])
    return (
        <div className="container mt-5">
            <h1 className="margin">About</h1>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <img alt="Caleb" className="rounded mx-auto d-block margin" src="/Assets/Images/profilePic.jpg" width="276"
                        height="365" />
                    <p className="margin">
                        Hello! My name is Caleb Chaney and I currently live in Franklin, Tn. I'm a self-starter and I'm motivated.
                        I worked two jobs through school instead of taking out a student loan and am currently attending Vanderbilt University's coding bootcamp. I love critical thinking and problem
                        solving, and enjoy both working alone and with a team. My goal is simply to help grow and grow with a company as a
                        developer. Check out a few of the skills I have acquired below and feel free to email me at calebc347@gmail.com or call/text me at 615-423-7642.
                    </p>
                    <br />
                    <br />
                    <h1>Skills</h1>
                    <br />
                    <i className="fab fa-html5 fa-4x margin-right3"></i><i className="fab fa-css3-alt fa-4x margin-right3"></i><i className="fab fa-js-square fa-4x margin-right2"></i><i className="fab fa-node-js fa-4x margin-right4"></i><i className="fab fa-react fa-4x margin-right4"></i><i className="fab fa-npm fa-4x margin-right3"></i><i className="fab fa-bootstrap fa-4x margin-right3"></i>
                    <pre className="tab"><strong> HTML    CSS  Javascript Node.js  React.js     NPM    Bootstrap</strong> </pre>
                </div>
                <div className="col-md-6">
                    <h1 id="bigmargintop">Connect With Me:</h1>
                    <ul id="listmargin">
                        <li className="textmargin"><i className="fas fa-file icon"></i>
                My Resume: <a
                                href="https://docs.google.com/document/d/1OKQAhkYipP6mVaQxLH_UPPqhoGnGw-i9h2QaGgLEcAw/edit?usp=sharing">https://docs.google.com/document/</a>
                        </li>
                        <li className="textmargin"><i className="fab fa-github-square icon"></i>
                GitHub Profile: <a
                                href="https://github.com/Cachamoe">https://github.com/Cachamoe?tab=repositories</a>
                        </li>
                        <li className="textmargin"><i className="fab fa-linkedin icon"></i>
                LinkedIn Profile: <a
                                href="https://www.linkedin.com/in/caleb-chaney-6327731b1/">https://www.linkedin.com/in/caleb-chaney</a>
                        </li>
                        <li className="textmargin"><i className="fab fa-instagram icon"></i>
                Instagram Account: <a
                                href="https://www.instagram.com/caleb__chaney/">https://www.instagram.com/caleb__chaney/</a>
                        </li>
                        <li className="textmargin"><i className="fas fa-tasks icon"></i>
                Scratch Project Page: <a
                                href="https://scratch.mit.edu/projects/412304039/">https://scratch.mit.edu/projects/412304039/</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;