import React from "react";


function Footer(props) {
    return (
        <footer className="margin-top">
            <div className="card text-center">
                <div className="card-body">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Thanks for looking!</h5>
                        <p className="card-text">If you would like to look at some of my projects, click below!</p>
                        <a href={props.url} className="btn btn-dark">{props.page}</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;