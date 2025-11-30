import React,{Component} from "react";

export default class Product extends Component{
    render(){
        return(
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card m-2" style={{minHeight: '280px'}}>
                <div className="card-body d-flex flex-column">
                    <div className="text-muted">#{this.props.product.id}</div>
                    
                    <h5 className="pt-2 border-top">{this.props.product.productName}</h5>
                    <div className="mb-2"><strong>${this.props.product.price.toLocaleString()}</strong></div>
                    
                    <div className="mt-auto">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <span className="text-muted">Quantity:</span>
                            <span className="badge bg-secondary fs-6">{this.props.product.quantity}</span>
                        </div>
                        
                        <div className="btn-group w-100 mb-2">
                            <button 
                                className="btn btn-outline-primary" 
                                onClick={() => this.props.onDecrement(this.props.product)}
                                disabled={this.props.product.quantity === 0}>
                                -
                            </button>
                            <button 
                                className="btn btn-outline-primary" 
                                onClick={() => this.props.onIncrement(this.props.product)}>
                                +
                            </button>
                        </div>
                        
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
             );
    }  
}