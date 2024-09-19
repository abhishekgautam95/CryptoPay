import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import TransferSol from "./components/TransferSol";
import CheckBalance from "./components/CheckBalance";
import TransactionHistory from "./components/TransactionHistory";
import AddressBook from "./components/AddressBook";
import PayBill from "./components/PayBill"; // Only import once
import CryptoTransfer from "./components/CryptoTransfer";
import FeedbackForm from './components/FeedbackForm';
import WalletConnect from './components/WalletConnect';

import './App.css';

function App() {
  const [walletAddress, setWalletAddress] = React.useState("6SDAWzWRLZBdmBELfb63zyPBqnmW925TbcyY6PPgG2xv");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [toWallet, setToWallet] = React.useState("");
  const [balance, setBalance] = React.useState(0);

  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="content">
          <header className="App-header">
            <h1>Crypto Payment App</h1>
          </header>
          <Routes>
            <Route path="/" element={<AddressBook setToWallet={setToWallet} />} />
            <Route path="/transfer-sol" element={
              <TransferSol
                fromWallet={walletAddress}
                toWallet={toWallet}
                setToWallet={setToWallet}
                setIsLoading={setIsLoading}
                setError={setError}
                balance={balance}
                setBalance={setBalance}
              />
            } />
            <Route path="/check-balance" element={<CheckBalance walletAddress={walletAddress} />} />
            <Route path="/transaction-history" element={<TransactionHistory walletAddress={walletAddress} />} />
            <Route path="/pay-bill" element={<PayBill />} />
            <Route path="/crypto-transfer" element={<CryptoTransfer />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/wallet-connect" element={<WalletConnect />} />
          </Routes>
          {isLoading && <div className="spinner"></div>}
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </Router>
  );
}

export default App;
