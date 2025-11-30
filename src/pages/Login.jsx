import React, { Component } from "react";

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome back!\nLogging in with: ${this.state.email}`);
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="container p-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card p-4">
                            <h1 className="text-center mb-4">Login</h1>
                            <form onSubmit={this.handleSubmit}>
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
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="text-center mt-3">
                                <a href="/signup">Don't have an account? Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
