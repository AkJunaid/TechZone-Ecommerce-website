import React,{Component} from "react";

export default class MainContent extends Component{

    state ={PageTitle:"TechZone" ,
     customerNumber:"5",
    customers:[
        {id:1 , name:"Junaid", phone:1243433},
        {id:2 , name:"toshin", phone:123456},
        {id:3 , name:"aid", phone:12378542},
        {id:4 , name:"AK", }



    ]
    };
     
    render(){
        return <div>
            <h4 className="PageTitle">{this.state.PageTitle} 
            <span className="customerNumber"> 
                {this.state.customerNumber}
            </span>
            <button className="refreshButton"  onClick={this.onRefreshClick}>Refresh</button>
            </h4> 
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                    </tr>

                </thead> 
                <tbody>
                    {
                    this.state.customers.map((cust)=>{ //mapping with arrow function,at line number 42 if some data is missing then it will show no phone 
                        return(
                        <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>{cust.name}</td> 
                        <td>{cust.phone==null?"no phone" : cust.phone}</td> 
                    </tr>
                       );
                    })
                    
                }
                   
                </tbody>


            </table>

        </div>
    }

 onRefreshClick=()=>{ //arrow function 
    this.setState({
        customerNumber:8,
    });

 }

}