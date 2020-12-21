import React, { useEffect } from "react";


function Portfolio(props) {
    useEffect(() => {
        props.setPage("Contact")
        props.setUrl("/Contact")
        props.setText("If you would like to contact me, click below!")
    }, [])
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="margin">Portfolio</h1>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="block__73694">
                    <div className="container">
                        <div className="row d-flex no-gutters align-items-stretch">
                            <div className="col-12 col-lg-8 block__73422 order-lg-2"
                                style={{ backgroundSize: "contain", backgroundImage: "url('/Assets/Images/Screen Shot 2020-11-18 at 5.22.01 PM.png')" }}
                                data-aos="fade-left" data-aos-delay="">
                            </div>
                            <div className="col-lg-4 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos="fade-right"
                                data-aos-delay="">
                                <h2 className="mb-3 projectName">Calorie Tracker</h2>
                                <p>Here is a link to the deployed site:</p>
                                <a
                                    href="https://whispering-river-77918.herokuapp.com">https://whispering-river-77918.herokuapp.com</a>
                                <br />
                                <br />
                                <p>Here is a link to GitHub:</p>
                                <a
                                    href="https://github.com/Cachamoe/Calorie-Tracker">https://github.com/Cachamoe/Calorie-Tracker</a>
                                <ul className="ul-check primary list-unstyled mt-5">
                                    <li>Javascript</li>
                                    <li>CSS</li>
                                    <li>Bulma</li>
                                    <li>MySQL</li>
                                    <li>Handlebars</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Moment.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block__73694 mb-2">
                    <div className="container">
                        <div className="row d-flex no-gutters align-items-stretch">
                            <div className="col-12 col-lg-8 block__73422"
                                style={{ backgroundSize: "contain", backgroundImage: "url('Assets/Images/Screen Shot 2020-09-22 at 8.50.04 AM.png')" }}
                                data-aos="fade-right" data-aos-delay="">
                            </div>
                            <div className="col-lg-4 ml-auto p-lg-5 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="">
                                <h2 className="mb-3 projectName">Sound Finder</h2>
                                <p>Here is a link to the deployed site:</p>
                                <a href="https://arrow913.github.io/soundfinder/">https://arrow913.github.io/soundfinder/</a>
                                <br />
                                <br />
                                <p>Here is a link to GitHub:</p>
                                <a href="https://github.com/Cachamoe/Sound-Finder">https://github.com/Cachamoe/Sound-Finder</a>
                                <ul className="ul-check primary list-unstyled mt-5">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>jQuery</li>
                                    <li>Bootstrap</li>
                                    <li>Foundation</li>
                                    <li>Granim</li>
                                    <li>Font Awesome</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="block__73694">
                        <div className="container">
                            <div className="row d-flex no-gutters align-items-stretch">
                                <div className="col-12 col-lg-8 block__73422 order-lg-2"
                                    style={{ backgroundSize: "contain", backgroundImage: "url('Assets/Images/Screen Shot 2020-09-16 at 10.52.11 AM.png')" }}
                                    data-aos="fade-left" data-aos-delay="">
                                </div>
                                <div className="col-lg-4 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos="fade-right"
                                    data-aos-delay="">
                                    <h2 className="mb-3 projectName">Weather Dashboard</h2>
                                    <p>Here is a link to the deployed site:</p>
                                    <a
                                        href="https://cachamoe.github.io/Weather-Dashboard/">https://cachamoe.github.io/Weather-Dashboard/</a>
                                    <br />
                                    <br />
                                    <p>Here is a link to GitHub:</p>
                                    <a
                                        href="https://github.com/Cachamoe/Weather-Dashboard">https://github.com/Cachamoe/Weather-Dashboard</a>
                                    <ul className="ul-check primary list-unstyled mt-5">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>jQuery</li>
                                        <li>Bootstrap</li>
                                        <li>Moment.js</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="block__73694 mb-2">
                        <div className="container">
                            <div className="row d-flex no-gutters align-items-stretch">
                                <div className="col-12 col-lg-8 block__73422"
                                    style={{ backgroundSize: "contain", backgroundImage: "url('Assets/Images/Screen Shot 2020-08-27 at 8.41.03 PM.png')" }}
                                    data-aos="fade-right" data-aos-delay="">
                                </div>
                                <div className="col-lg-4 ml-auto p-lg-5 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="">
                                    <h2 className="mb-3 projectName">Code Quiz</h2>
                                    <p>Here is a link to the deployed site:</p>
                                    <a href="https://cachamoe.github.io/Code-Quiz/">https://cachamoe.github.io/Code-Quiz/</a>
                                    <br />
                                    <br />
                                    <p>Here is a link to GitHub:</p>
                                    <a href="https://github.com/Cachamoe/Code-Quiz">https://github.com/Cachamoe/Code-Quiz</a>
                                    <ul className="ul-check primary list-unstyled mt-5">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>jQuery</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="block__73694">
                            <div className="container">
                                <div className="row d-flex no-gutters align-items-stretch">
                                    <div className="col-12 col-lg-8 block__73422 order-lg-2"
                                        style={{ backgroundSize: "contain", backgroundImage: "url('Assets/Images/Screen Shot 2020-11-03 at 6.43.56 PM.png')" }}
                                        data-aos="fade-left" data-aos-delay="">
                                    </div>
                                    <div className="col-lg-4 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos="fade-right"
                                        data-aos-delay="">
                                        <h2 className="mb-3 projectName">Burger Logger</h2>
                                        <p>Here is a link to the deployed site:</p>
                                        <a
                                            href="https://evening-castle-60643.herokuapp.com/">https://evening-castle-60643.herokuapp.com/</a>
                                        <br />
                                        <br />
                                        <p>Here is a link to GitHub:</p>
                                        <a
                                            href="https://github.com/Cachamoe/Burger-Logger">https://github.com/Cachamoe/Burger-Logger</a>
                                        <ul className="ul-check primary list-unstyled mt-5">
                                            <li>Javascript</li>
                                            <li>CSS</li>
                                            <li>MySQL</li>
                                            <li>Node.js</li>
                                            <li>Express.js</li>
                                            <li>Handlebars</li>
                                            <li>JSON</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="block__73694 mb-2">
                            <div className="container">
                                <div className="row d-flex no-gutters align-items-stretch">
                                    <div className="col-12 col-lg-8 block__73422"
                                        style={{ backgroundSize: "contain", backgroundImage: "url('Assets/Images/Screen Shot 2020-11-29 at 7.07.14 PM.png')" }}
                                        data-aos="fade-right" data-aos-delay="">
                                    </div>
                                    <div className="col-lg-4 ml-auto p-lg-5 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="">
                                        <h2 className="mb-3 projectName">Fitness Tracker</h2>
                                        <p>Here is a link to the deployed site:</p>
                                        <a
                                            href="https://rocky-hollows-56823.herokuapp.com/">https://rocky-hollows-56823.herokuapp.com//</a>
                                        <br />
                                        <br />
                                        <p>Here is a link to GitHub:</p>
                                        <a
                                            href="https://github.com/Cachamoe/Fitness-Tracker">https://github.com/Cachamoe/Fitness-Tracker</a>
                                        <ul className="ul-check primary list-unstyled mt-5">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>MongoDB</li>
                                            <li>Mongoose</li>
                                            <li>Bootstrap</li>
                                            <li>JSON</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="block__73694">
                            <div className="container">
                                <div className="row d-flex no-gutters align-items-stretch">
                                    <div className="col-12 col-lg-8 block__73422 order-lg-2"
                                        style={{ backgroundSize: "contain", backgroundImage: "url('Assets/Images/Screen Shot 2020-09-07 at 12.36.47 PM.png')" }}
                                        data-aos="fade-left" data-aos-delay="">
                                    </div>
                                    <div className="col-lg-4 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos="fade-right"
                                        data-aos-delay="">
                                        <h2 className="mb-3 projectName">Work Day Scheduler</h2>
                                        <p>Here is a link to the deployed site:</p>
                                        <a
                                            href="https://cachamoe.github.io/Third-Party-Api/">https://cachamoe.github.io/Third-Party-Api/</a>
                                        <br />
                                        <br />
                                        <p>Here is a link to GitHub:</p>
                                        <a
                                            href="https://github.com/Cachamoe/Third-Party-Api">https://github.com/Cachamoe/Third-Party-Api</a>
                                        <ul className="ul-check primary list-unstyled mt-5">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>jQuery</li>
                                            <li>Moment.js</li>
                                            <li>Font Awesome</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;