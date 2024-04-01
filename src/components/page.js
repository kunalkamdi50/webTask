import React  from "react";
import './page.css'
import { Link, useLocation } from "react-router-dom";


function Page(){
    const location = useLocation();
    const currentPath = location.pathname;
    return( 
    <div className="navbar">
         <div className="gradient"></div>
        <div className="links">
            <Link to="/" className={currentPath === "/" ? "active" : ""}>
                Home
            </Link>
            <Link 
            to="/about"
            className={currentPath === "/about" ? "active" : ""}
            >
            About
            </Link>
            <Link 
            to="/contact" 
            className={currentPath === "/contact" ? "active" : ""}
            >
            contact
            </Link>
            <Link 
            to="/profile" 
            className={currentPath === "/profile" ? "active" : ""}
            >
            Profile
            </Link>
        </div>

    </div> 
    );
}

export default Page;


