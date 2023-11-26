import React,{ Component } from "react";

export default class paymentCart extends Component {
    render(){ 
        return( 
        <React.Fragment>
             <div className="top">
        <h1 className="Signup">Signup</h1>
        <div className="First Name"><b>First Name</b>
          <br />
          <input type="text" placeholder="Enter Email: " />
        </div>
        <div className="Last Name"><b>Last Name</b>
          <br />
          <input type="text" placeholder="Enter Last Name: " />
        </div>
        <div className="User Name"><b>User Name</b>
          <br />
          <input type="text" placeholder="Enter UserName: " />
        </div>
        <div className="email"><b>Email</b>
          <br />
          <input type="email" placeholder="Enter Email: " />
        </div>
      </div>
        </React.Fragment>

);

    }


}

