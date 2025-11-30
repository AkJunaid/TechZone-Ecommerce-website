import React, { Component } from "react";

export default class Signup extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Account created for ${this.state.username}!\nEmail: ${this.state.email}`);
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="container p-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <h1 className="text-center mb-4">Sign Up</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label"><b>First Name</b></label>
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        className="form-control" 
                                        placeholder="Enter First Name" 
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><b>Last Name</b></label>
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        className="form-control" 
                                        placeholder="Enter Last Name" 
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><b>Username</b></label>
                                    <input 
                                        type="text" 
                                        name="username"
                                        className="form-control" 
                                        placeholder="Enter Username" 
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><b>Email</b></label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="form-control" 
                                        placeholder="Enter Email" 
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><b>Password</b></label>
                                    <input 
                                        type="password" 
                                        name="password"
                                        className="form-control" 
                                        placeholder="Enter Password" 
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
