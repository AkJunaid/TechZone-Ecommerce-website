import React,{ Component } from "react";

import Product from "./Product";




export default class ShoppingCart extends Component{

    state = {
        products:[
        { id:1 , productName:"Iphone 11",price:5900 , quantity:0},
        { id:2 , productName:"Iphone 12",price:6900 , quantity:0},
        { id:3 , productName:"Iphone 14",price:7900 , quantity:0},
        { id:4 , productName:"Iphone 13",price:6500 , quantity:0},--
        { id:5 , productName:"Iphone 13 pro",price:65070 , quantity:0},
        { id:6 , productName:"Iphone 11",price:5900 , quantity:0},
        { id:7 , productName:"Iphone 12",price:6900 , quantity:0},
        { id:8 , productName:"Iphone 14",price:7900 , quantity:0},
        { id:9 , productName:"Iphone 13",price:6500 , quantity:0},
        { id:10 , productName:"Iphone 13 pro",price:65070 , quantity:0},
    ], 
    };
    render(){
        return(<div className="container-fluid">
            <h4>Shopping Cart</h4>
            

                <div className="row">
                {this.state.products.map((prod)=>{
                    return <><Product
                        key={prod.id}
                        product={prod}>
                            <button className="BuyNow">Buy Now</button>
                            </Product>
                        
                        
                       </>
                
                
    })}
                </div>
                </div>
            
);
        
    }


}
