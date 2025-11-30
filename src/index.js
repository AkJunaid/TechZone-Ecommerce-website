import React from "react";
import { createRoot } from 'react-dom/client';

import "jquery" ;
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap" ;  
import "bootstrap/dist/css/bootstrap.css" ;
import App from "./App.jsx";
import "./index.css" ;



//createRoot(<NavBar/>, document.getElementById("root")) ;
createRoot(document.getElementById('root')).render(<App/>);

