import React from "react";

export default function About() {
    return (
        <div className="container p-5">
            <h1 className="mb-4">About TechZone</h1>
            <div className="card p-4">
                <h3>Welcome to TechZone</h3>
                <p className="lead mt-3">
                    TechZone is your one-stop destination for the latest and greatest in smartphone technology. 
                    We specialize in bringing you the newest iPhone models at competitive prices.
                </p>
                <h4 className="mt-4">Our Mission</h4>
                <p>
                    To provide customers with authentic, high-quality smartphones and exceptional customer service. 
                    We believe in making premium technology accessible to everyone.
                </p>
                <h4 className="mt-4">Why Choose Us?</h4>
                <ul>
                    <li>100% Authentic Products</li>
                    <li>Competitive Pricing</li>
                    <li>Fast & Secure Delivery</li>
                    <li>Excellent Customer Support</li>
                    <li>Warranty on All Products</li>
                </ul>
            </div>
        </div>
    );
}
