import { useState } from "react";
import { Connection, PublicKey, Transaction, SystemProgram, clusterApiUrl } from "@solana/web3.js";
import { QRCodeCanvas } from 'qrcode.react';
import { toast } from 'react-toastify';

const TransferSol = ({ fromWallet, setIsLoading, setError }) => {
    const [toWallet, setToWallet] = useState("");
    const [amount, setAmount] = useState(0);

    const isValidPublicKey = (key) => {
        try {
            new PublicKey(key);
            return true;
        } catch (error) {
            return false;
        }
    };

    const transferSol = async () => {
        if (!fromWallet || !isValidPublicKey(fromWallet)) {
            setError("Please connect a valid wallet first.");
            return;
        }

        if (!toWallet || !isValidPublicKey(toWallet)) {
            setError("Please enter a valid recipient wallet address.");
            return;
        }

        if (amount <= 0) {
            setError("Please enter a valid amount of SOL to transfer.");
            return;
        }

        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const { blockhash } = await connection.getLatestBlockhash();

        const transaction = new Transaction({
            recentBlockhash: blockhash,
            feePayer: new PublicKey(fromWallet),
        }).add(
            SystemProgram.transfer({
                fromPubkey: new PublicKey(fromWallet),
                toPubkey: new PublicKey(toWallet),
                lamports: amount * 1000000000, // Convert SOL to lamports
            })
        );

        try {
            setIsLoading(true);
            const { solana } = window;
            if (!solana) {
                setError("Solana wallet is not connected.");
                return;
            }

            const signedTransaction = await solana.signTransaction(transaction);
            const signature = await connection.sendRawTransaction(signedTransaction.serialize());
            await connection.confirmTransaction(signature, "confirmed");
            toast.success(`Transaction successful! Signature: ${signature}`);
        } catch (err) {
            console.error("Transaction failed:", err);
            setError("Transaction failed: " + err.message);
            toast.error("Transaction failed: " + err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="transfer-form">
            <h3>Transfer SOL</h3>
            <input
                type="text"
                placeholder="Recipient Wallet Address"
                value={toWallet}
                onChange={(e) => setToWallet(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount (SOL)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className="send-btn" onClick={transferSol}>Send SOL</button>
            <QRCodeCanvas value={fromWallet} size={128} />
        </div>
    );
};

export default TransferSol;
