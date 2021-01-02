import React from "react";


function Project(props) {
    return (
        <div className="block__73694">
            <div className="container">
                <div className="row d-flex no-gutters align-items-stretch">
                    <div className="col-12 col-lg-8 block__73422 order-lg-2"
                        style={{
                            backgroundSize: "contain",
                            backgroundImage: "url('"+ props.img +"')"
                        }}
                        data-aos={props.fade1} data-aos-delay="">
                    </div>
                    <div className="col-lg-4 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos={props.fade2}
                        data-aos-delay="">
                        <h2 className="mb-3 projectName">{props.projectName}</h2>
                        <p>Here is a link to the deployed site:</p>
                        <a
                            href={props.deployed}>{props.deployed}</a>
                        <br />
                        <br />
                        <p>Here is a link to GitHub:</p>
                        <a
                            href={props.github}>{props.github}</a>
                        <ul className="ul-check primary list-unstyled mt-5">
                            <li>{props.list[0]}</li>
                            <li>{props.list[1]}</li>
                            <li>{props.list[2]}</li>
                            <li>{props.list[3]}</li>
                            <li>{props.list[4]}</li>
                            <li>{props.list[5]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;