import React from 'react';
import "../style/contact.css";


export const Contact = () => {
    return (
        <div className="container main">
            <div className="main-box col-xs-12 col-md-10 col-lg-6">
                <h1 className="justify-content-start">Contact</h1>
                <hr />
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                <button type="button" className="btn btn-primary">Submit</button>

            </div>

        </div>
    )

}