import React from 'react';
import sidebar1 from '../assets/img/sidebar-1.jpg'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import logo from '../assets/img/logo/halalogo.png'
import '../Styles/StyleBar.css'
// import UserProfile from './UserProfile'
function SideBar() {
    return (
      <div className="SideBar">
      
      <div className="sidebar" data-color="purple" data-background-color="white" data-image={sidebar1}>
     
      <div style={{backgroundColor:"purple"}} className="logo">
          {/* <span class="btn btn-primary">Hala</span> Talent */}
          <img id="logopad" style={{width:"70%"}}  src={logo}/>
        </div>
      <div className="sidebar-wrapper">
        <ul className="nav">

          <li className="nav-item active ">
          <Link className="nav-link" to="/Employee">  
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
          </Link>
          </li>
          
          
          
          
          <li   className="nav-item  ">
    

            <Link  id="btnhover" className="nav-link" to="/MyProfile" >
              <i className="material-icons">person</i>
              <p >My Profile</p>
              </Link>
          </li>
         
        
         
          <li className="nav-item" >
          <Link id="btnhover" className="nav-link" to="/TalentListing">
              <i className="material-icons">group</i>
              <p>Talent Listing</p>
            </Link>
          </li>
          <li className="nav-item ">
          <Link id="btnhover" className="nav-link" to="/shortlist">
              <i className="material-icons">list</i>
              <p>Talent ShortList</p>
              </Link>
              
           
          </li>
          <li className="nav-item ">
          <Link id="btnhover" className="nav-link" to="/BestWishList">
              <i className="material-icons">favorite</i>
              <p>Best Match</p>
              </Link>
              
           
          </li>
         
         
          <li className="nav-item ">
          <Link id="btnhover" className="nav-link" to="/Faqs">
              <i className="material-icons">live_help</i>
              <p>FAQs</p>
              </Link>
              
           
          </li>
          
        </ul>
      </div>
    </div>
      </div>
    );
  }
  
  export default SideBar;
  