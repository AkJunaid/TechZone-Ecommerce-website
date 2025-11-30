import React,{ Component } from "react";

import Product from "./Product";




export default class ShoppingCart extends Component{

    state = {
        products:[
        { id:1 , productName:"Iphone 11",price:5900 , quantity:0},
        { id:2 , productName:"Iphone 12",price:6900 , quantity:0},
        { id:3 , productName:"Iphone 14",price:7900 , quantity:0},
        { id:4 , productName:"Iphone 13",price:6500 , quantity:0},
        { id:5 , productName:"Iphone 13 pro",price:65070 , quantity:0},
        { id:6 , productName:"Iphone 11",price:5900 , quantity:0},
        { id:7 , productName:"Iphone 12",price:6900 , quantity:0},
        { id:8 , productName:"Iphone 14",price:7900 , quantity:0},
        { id:9 , productName:"Iphone 13",price:6500 , quantity:0},
        { id:10 , productName:"Iphone 13 pro",price:65070 , quantity:0},
    ], 
    };

    // Increment quantity
    handleIncrement = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        allProducts[index].quantity++;
        this.setState({ products: allProducts });
    };

    // Decrement quantity
    handleDecrement = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantity > 0) {
            allProducts[index].quantity--;
            this.setState({ products: allProducts });
        }
    };

    // Buy Now functionality
    handleBuyNow = (product) => {
        if (product.quantity > 0) {
            alert(`Successfully added ${product.quantity} ${product.productName}(s) to cart!\nTotal: $${product.quantity * product.price}`);
        } else {
            alert("Please select quantity first!");
        }
    };

    // Calculate total items in cart
    getTotalQuantity = () => {
        return this.state.products.reduce((total, prod) => total + prod.quantity, 0);
    };

    // Calculate total price
    getTotalPrice = () => {
        return this.state.products.reduce((total, prod) => total + (prod.quantity * prod.price), 0);
    };

    render(){
        const totalItems = this.getTotalQuantity();
        const totalPrice = this.getTotalPrice();
        
        return(<div className="container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Shopping Cart 
                    <span className="badge bg-primary ms-3">{totalItems} Items</span>
                </h2>
                {totalItems > 0 && (
                    <div className="text-end">
                        <h5 className="text-muted">Total: <span className="text-success">${totalPrice.toLocaleString()}</span></h5>
                    </div>
                )}
            </div>
            

            <div className="row">
                {this.state.products.map((prod)=>{
                    return <Product
                        key={prod.id}
                        product={prod}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onBuyNow={this.handleBuyNow}>
                            <button 
                                className="btn btn-success w-100" 
                                onClick={() => this.handleBuyNow(prod)}
                                disabled={prod.quantity === 0}>
                                Buy Now
                            </button>
                        </Product>
                
                
                })}
            </div>
        </div>
            
        );
        
    }


}
