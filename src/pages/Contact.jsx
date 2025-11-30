import React from "react";

export default function Contact() {
    return (
        <div className="container p-5">
            <h1 className="mb-4">Contact Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h3>Get in Touch</h3>
                        <form className="mt-4">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-4">
                        <h3>Contact Information</h3>
                        <div className="mt-4">
                            <h5><i className="bi bi-geo-alt"></i> Address</h5>
                            <p>123 Tech Street, Silicon Valley, CA 94025</p>
                            
                            <h5 className="mt-3"><i className="bi bi-telephone"></i> Phone</h5>
                            <p>+1 (555) 123-4567</p>
                            
                            <h5 className="mt-3"><i className="bi bi-envelope"></i> Email</h5>
                            <p>support@techzone.com</p>
                            
                            <h5 className="mt-3"><i className="bi bi-clock"></i> Business Hours</h5>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 4:00 PM<br />
                            Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
