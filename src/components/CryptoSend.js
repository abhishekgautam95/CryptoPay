// src/components/CryptoSend.js
import React, { useState } from 'react';

const CryptoSend = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('SOL');
  const [amount, setAmount] = useState('');
  const [toAddress, setToAddress] = useState('');

  const handleSend = () => {
    // Handle sending crypto logic here
  };

  return (
    <div className="crypto-send">
      <h2>Send Cryptocurrency</h2>
      <select value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)}>
        <option value="SOL">Solana</option>
        <option value="BTC">Bitcoin</option>
        <option value="ETH">Ethereum</option>
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        placeholder="Recipient Address"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default CryptoSend;
