# TechZone E-Commerce Website

A modern, responsive e-commerce web application built with React for selling the latest iPhone models. This project features a fully functional shopping cart system with real-time quantity tracking and dynamic price calculations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Pages](#pages)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive Shopping Cart**: Add and remove items with real-time quantity updates
- **Product Catalog**: Browse through 10 different iPhone models with prices
- **Dynamic Price Calculation**: Automatically calculates total items and total price
- **Responsive Design**: Fully responsive layout using Bootstrap 5
- **Multi-Page Navigation**: Clean navigation with React Router
- **User Authentication Pages**: Signup and Login forms with validation
- **Contact Form**: Customer support contact page
- **About Section**: Company information and mission statement
- **Modern UI**: Gradient navigation bar with hover effects
- **Cart Summary**: Real-time badge showing total items in cart

## Technologies Used

- **React** (v18.2.0) - JavaScript library for building user interfaces
- **React Router DOM** (v6.8.0) - Declarative routing for React applications
- **Bootstrap** (v5.2.3) - CSS framework for responsive design
- **jQuery** (v3.7.0) - JavaScript library for DOM manipulation
- **Create React App** - Boilerplate for React applications

## Project Structure

```
TechZone-Ecommerce-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Signup.jsx
│   │   └── Login.jsx
│   ├── App.css
│   ├── App.js
│   ├── App.jsx
│   ├── CustomersList.jsx
│   ├── index.css
│   ├── index.js
│   ├── NavBar.jsx
│   ├── payment.jsx
│   ├── Product.jsx
│   └── ShoppingCart.jsx
├── package.json
└── README.md
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:
```bash
git clone https://github.com/AkJunaid/TechZone-Ecommerce-website.git
```

2. Navigate to the project directory:
```bash
cd TechZone-Ecommerce-website
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and visit:
```
http://localhost:3000
```

## Usage

### Shopping Cart Features

1. **Browse Products**: View all available iPhone models on the home page
2. **Add to Cart**: Click the "+" button to increase quantity
3. **Remove from Cart**: Click the "-" button to decrease quantity
4. **Buy Now**: Click "Buy Now" to see purchase summary (requires quantity > 0)
5. **View Total**: Check the cart badge and total price at the top of the page

### Navigation

- **Home**: View products and shopping cart
- **About**: Learn about TechZone
- **Contact**: Get in touch with customer support
- **Signup**: Create a new account
- **Login**: Access your account

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

## Pages

### Home (`/home`)
Displays the main shopping cart with all available products. Users can browse products, adjust quantities, and make purchases.

### About (`/about`)
Information about TechZone, including the company mission, values, and why customers should choose TechZone.

### Contact (`/contact`)
Contact form and business information including address, phone number, email, and business hours.

### Signup (`/signup`)
User registration form with fields for first name, last name, username, email, and password.

### Login (`/login`)
User authentication form with email and password fields, plus a "remember me" option.

## Components

### NavBar
- Gradient background navigation bar
- React Router Links for navigation
- Responsive design with hover effects

### ShoppingCart
- Manages product state and quantities
- Handles increment/decrement operations
- Calculates total items and total price
- Renders product grid

### Product
- Individual product card component
- Displays product information (ID, name, price, quantity)
- Increment/Decrement buttons
- Buy Now button
- Bootstrap card styling

## Key Features Explained

### State Management
The shopping cart uses React component state to manage:
- Product list with quantities
- Real-time updates when quantities change
- Total calculations

### Event Handlers
- `handleIncrement`: Increases product quantity
- `handleDecrement`: Decreases product quantity (minimum 0)
- `handleBuyNow`: Shows purchase confirmation alert

### Responsive Design
- Mobile-first approach
- Bootstrap grid system for product layout
- Responsive navigation bar
- Card-based product display

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

