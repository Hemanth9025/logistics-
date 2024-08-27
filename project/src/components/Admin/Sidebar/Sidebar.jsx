import React, { useState } from 'react';
import { FaTachometerAlt, FaCogs, FaChartPie, FaBook, FaTruck, FaChevronRight, FaChevronLeft, FaCircle, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import CreateTransferDialog from './CreateTransferDialog';

const Sidebar = () => {
  const [managementOpen, setManagementOpen] = useState(false);
  const [transferOpen, setTransferOpen] = useState(false);
  const [isCreateTransferOpen, setIsCreateTransferOpen] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  const toggleManagement = () => {
    setManagementOpen(!managementOpen);
  };

  const toggleTransfer = () => {
    setTransferOpen(!transferOpen);
  };

  const handleCreateTransferOpen = () => {
    setIsCreateTransferOpen(true);
  };

  const handleCreateTransferClose = () => {
    setIsCreateTransferOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');  // Remove user session data
    navigate('/');  // Redirect to login page
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar-logo">TRACKPRO</h1>
      <div className="user-info">
        <FaUserCircle size={40} />
        <span className="username">John Doe</span>
      </div>
      <div className="menu">
        <h2>MENU</h2>
        <ul>
          <li>
            <Link to="/Dashboard" style={{ color: 'white', textDecoration: 'none' }}><FaTachometerAlt /> Dashboard</Link>
          </li>
          <li onClick={toggleManagement} aria-expanded={managementOpen} className={`menu-item ${managementOpen ? 'open' : ''}`}>
            <div className="dropdown">
              <span className="dropdown-text"><FaCogs /> Management</span>
              <span className="dropdown-icon">{managementOpen ? <FaChevronLeft /> : <FaChevronRight />}</span>
            </div>
            <ul className={`submenu ${managementOpen ? 'show' : ''}`}>
              <li className='order'><Link to="/userdetails"><FaCircle /> Users & Services</Link></li>
              <li className='order'><Link to="/warehouse"><FaCircle /> Warehouse Management</Link></li>
            </ul>
          </li>
          <li onClick={toggleTransfer} aria-expanded={transferOpen} className={`menu-item ${transferOpen ? 'open' : ''}`}>
            <div className="dropdown">
              <span className="dropdown-text"><FaTruck /> Transfer</span>
              <span className="dropdown-icon">{transferOpen ? <FaChevronLeft /> : <FaChevronRight />}</span>
            </div>
            <ul className={`submenu ${transferOpen ? 'show' : ''}`}>
              <li onClick={handleCreateTransferOpen}><FaCircle /> Create Transfer</li>
            </ul>
          </li>
          <li>
            <Link to="/report" style={{ color: 'white', textDecoration: 'none' }}>
              <FaChartPie /> Reporting & Analytics
            </Link>
          </li>
          <li onClick={handleLogout}>
            <FaBook /> Logout
          </li>
        </ul>
      </div>
      <CreateTransferDialog open={isCreateTransferOpen} onClose={handleCreateTransferClose} />
    </div>
  );
};

export default Sidebar;
