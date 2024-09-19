import { useEffect, useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const CheckBalance = ({ walletAddress }) => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
            try {
                const publicKey = new PublicKey(walletAddress);
                const balance = await connection.getBalance(publicKey);
                setBalance(balance / 1000000000);
            } catch (err) {
                console.error("Error fetching balance:", err);
            }
        };

        fetchBalance();
    }, [walletAddress]);

    return <div className="balance">Current Balance: {balance} SOL</div>;
};

export default CheckBalance;
