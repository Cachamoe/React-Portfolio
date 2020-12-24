import React from "react";


function Project(props) {
    return (
        <div class="block__73694">
            <div class="container">
                <div class="row d-flex no-gutters align-items-stretch">
                    <div class="col-12 col-lg-8 block__73422 order-lg-2"
                        style={props.img}
                        data-aos="fade-left" data-aos-delay="">
                    </div>
                    <div class="col-lg-4 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos="fade-right"
                        data-aos-delay="">
                        <h2 class="mb-3 projectName">{props.projectName}</h2>
                        <p>Here is a link to the deployed site:</p>
                        <a
                            href={props.deployed}>{props.deployed}</a>
                        <br />
                        <br />
                        <p>Here is a link to GitHub:</p>
                        <a
                            href={props.github}>{props.github}</a>                          
                        <ul class="ul-check primary list-unstyled mt-5">
                            <li>{props.list}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;