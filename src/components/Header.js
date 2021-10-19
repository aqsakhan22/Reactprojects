import React, { useState, useEffect } from "react";
import {  Link, useLocation } from "react-router-dom";

import "./header.css";
const Header = () => {
  const [activeTab, setactiveTab] = useState("Home");
  const location=useLocation();
  useEffect(()=>{
    switch (location.pathname) {
          case "/":
              
              break;
              case "/add":
                setactiveTab("AddContact")
                break;
                case "/about":
                    setactiveTab("About")
                    break;
      
          default:
              break;


  }})
 
  return(
    <div className="header">
      <div className="left">
      <h2>Contact form</h2>
        </div> 
     
        <div className="right">
          <Link to="/"> 
          <a  onClick={() => setactiveTab("Home")} className={`${activeTab === "Home" ? "active" : ""}`}>
            Home
            </a>
          </Link>
          <Link to="/add">
        
        <a
            className={`${activeTab === "AddContact" ? "active" : ""}`}
            onClick={() => setactiveTab("AddContact")}
          >
       AddContact
          </a>
        </Link>

        <Link to="/about">
        
        <a
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setactiveTab("About")}
          >
            About
          </a>
        </Link>
        </div> 
    </div>
  )
};

export default Header;