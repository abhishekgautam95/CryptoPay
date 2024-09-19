// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Ensure this file exists

const Navbar = ({ isVisible }) => {
  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/transfer">Transfer SOL</a></li>
        <li><a href="/history">Transaction History</a></li>
        <li><a href="/address-book">Address Book</a></li>
        <li><a href="/qr-code">QR Code</a></li>
        <li><a href="/help">Help</a></li>
        <li><a href="/documentation">Documentation</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
