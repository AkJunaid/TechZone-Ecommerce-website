import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="topnav">
                    <h4 className="title">TechZone</h4> 
                    <div>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

