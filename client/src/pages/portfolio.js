import React, { useEffect } from "react";
import "./style.css";
import Project from "../components/Project";
const data = require("../components/Project/projects.json");


function Portfolio(props) {
    useEffect(() => {
        props.setPage("Contact")
        props.setUrl("/Contact")
        props.setText("If you would like to contact me, click below!")
    }, []);

    const projects = data.map(project => (
        <Project
            projectName={project.projectName}
            fade1={project.fade1}
            fade2={project.fade2}
            img={project.img}
            deployed={project.deployed}
            github={project.github}
            list={project.list}
        />
    ));

    return (
        <>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-8">
                    <h1 className="margin1">Portfolio</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            {projects}
        </>
    )
}

export default Portfolio;