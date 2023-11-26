import React,{Component} from "react";

export default class Product extends Component{
    state={
    product:this.props.product
};
    render(){
        console.log(this.props) //bootsrap card 
        return(
        <div className="box">
        <div className="card m-2">

            <div className="card-body">
            <div className="text-muted"># {this.state.product.id}</div>
             
            <h5 className="pt-2 border-top">{this.state.product.productName}</h5>
            <div>${this.state.product.price}</div> 


               
              <div className="card-footer">
            <div className="float-left">
            <span className="badge">{this.state.product.quantity}</span></div>
              </div>
             
            
            <div className="btn-group" >
                        <button className="btn ">+</button>
                        <button className="btn">-</button>
                    </div>
           
                </div>
                <div className="float-right">{this.props.children}

                </div>

                    
                   
              
              

              

                </div>
                 </div>
          
             
           
            
            
             );
    }  
}