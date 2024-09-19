import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Address Book</Link></li>
        <li><Link to="/transfer-sol">Transfer SOL</Link></li>
        <li><Link to="/check-balance">Check Balance</Link></li>
        <li><Link to="/transaction-history">Transaction History</Link></li>
        <li><Link to="/pay-bill">Pay Bill</Link></li>
        <li><Link to="/crypto-transfer">Crypto Transfer</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/wallet-connect">Wallet Connect</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
