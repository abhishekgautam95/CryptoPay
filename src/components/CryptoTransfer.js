import React, { useState } from 'react';

function CryptoTransfer() {
  const [cryptoType, setCryptoType] = useState('');
  const [amount, setAmount] = useState('');
  const [toAddress, setToAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Transferred ${amount} ${cryptoType} to ${toAddress}`);
  };

  return (
    <div>
      <h2>Crypto Transfer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Crypto Type (e.g., BTC, ETH)"
          value={cryptoType}
          onChange={(e) => setCryptoType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="To Address"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}

export default CryptoTransfer;
