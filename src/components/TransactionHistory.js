import { useEffect, useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const TransactionHistory = ({ walletAddress }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (walletAddress) {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      connection.getConfirmedSignaturesForAddress2(new PublicKey(walletAddress))
        .then(setHistory)
        .catch(console.error);
    }
  }, [walletAddress]);

  return (
    <div className="transaction-history">
      <h3>Transaction History</h3>
      <ul>
        {history.map((tx, index) => (
          <li key={index}>Signature: {tx.signature}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
