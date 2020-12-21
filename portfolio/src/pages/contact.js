import React, { useEffect } from "react";


function Contact(props) {
    useEffect(() => {
        props.setPage("About")
        props.setUrl("/")
    }, []) 
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="margin">Contact</h1>
                    <form className="margin-top2">
                        <div className="form-group">
                            <label for="exampleName">Name</label>
                            <input type="name" className="form-control" id="examplename1" />
                        </div>
                        <div className="form-group">
                            <label for="exampleEmailAddress">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <div className="form-group form-check">
                            <a href="#" id="submit" className="btn btn-secondary">Submit</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;