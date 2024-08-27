import React from 'react';
import { FaSearch, FaBell, FaUserCircle, FaQuestionCircle } from 'react-icons/fa';
import './ANavbar.css';
import { Link } from 'react-router-dom';

const ANavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-right">
        <div className="navbar-search">
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-actions">
          <Link to="/warehouse">Find A Space</Link>
          <a href="#vendor">Vendor</a>
          <a href="#help">Help</a>
        </div>
        <div className="navbar-icons">
         <Link to="/notibell" style={{ color: 'white', textDecoration: 'none' }}> <FaBell /></Link>
          <FaQuestionCircle />
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};
export default ANavbar;