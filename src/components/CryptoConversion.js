import React, { useState } from 'react';
import axios from 'axios';

const CryptoConversion = () => {
  const [crypto, setCrypto] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConvert = async () => {
    if (!crypto || !amount) {
      setError('Please enter both crypto name and amount.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usdc`);
      
      if (response.data[crypto]) {
        const rate = response.data[crypto].usdc;
        setRate(rate);
        setConvertedAmount((amount * rate).toFixed(2)); // Convert to USDC
      } else {
        setError('Invalid cryptocurrency name.');
      }
    } catch (error) {
      setError('Error converting crypto. Please try again.');
      console.error('Error converting crypto:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Crypto to USDC Converter</h2>
      <input
        type="text"
        placeholder="Enter crypto name (e.g., bitcoin)"
        value={crypto}
        onChange={(e) => setCrypto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleConvert} disabled={loading}>
        {loading ? 'Converting...' : 'Convert'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {convertedAmount !== null && (
        <div>
          <p>Conversion Rate: {rate} USDC</p>
          <p>Converted Amount: {convertedAmount} USDC</p>
        </div>
      )}
    </div>
  );
};

export default CryptoConversion;
