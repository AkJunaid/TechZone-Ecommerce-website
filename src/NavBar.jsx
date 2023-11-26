import React,{ Component } from "react";

export default class NavBar extends Component {
    render(){ 
        return( 
        <React.Fragment>
                  <div className="topnav">

                  <h4 className="title">TechZone</h4> 
        <a className="active" href="#home">Home</a>
        
        <a href="/#news">Product</a>
        <a href="/#contact">Contact</a>
        <a href="/#about">About</a>
        <a href="/#Signup">Signup</a>
        <a href="/#Login">Login</a>
      </div>
        </React.Fragment>

);

    }


}

