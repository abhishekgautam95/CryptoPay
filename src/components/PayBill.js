// src/components/PayBill.js
import React, { useState } from 'react';

function PayBill() {
  const [amount, setAmount] = useState('');
  const [billType, setBillType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle bill payment logic here
    alert(`Paid ${amount} for ${billType}`);
  };

  return (
    <div>
      <h2>Pay Bill</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bill Type"
          value={billType}
          onChange={(e) => setBillType(e.target.value)}
        />
        <button type="submit">Pay Bill</button>
      </form>
    </div>
  );
}

export default PayBill;
