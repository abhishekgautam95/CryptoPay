// src/components/BillPayment.js
import React, { useState } from 'react';

const BillPayment = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handlePayment = () => {
    // Handle bill payment logic here
  };

  return (
    <div className="bill-payment">
      <h2>Pay Bill</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="utilities">Utilities</option>
        <option value="subscription">Subscription</option>
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Bill</button>
    </div>
  );
};

export default BillPayment;
