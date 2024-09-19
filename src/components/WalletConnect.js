import { useState, useEffect } from "react";

const WalletConnect = ({ setWalletAddress }) => {
    const [wallet, setWallet] = useState(null);

    const connectWallet = async () => {
        const { solana } = window;
        if (solana && solana.isPhantom) {
            try {
                const response = await solana.connect();
                setWallet(response.publicKey.toString());
                setWalletAddress(response.publicKey.toString());
            } catch (err) {
                console.error(err);
            }
        } else {
            alert("Phantom wallet not found! Please install it.");
        }
    };

    useEffect(() => {
        const { solana } = window;
        if (solana && solana.isPhantom) {
            solana.on("connect", () => {
                setWallet(solana.publicKey.toString());
                setWalletAddress(solana.publicKey.toString());
            });
        }
    }, []);

    return (
        <div>
            {!wallet ? (
                <button onClick={connectWallet}>Connect Wallet</button>
            ) : (
                <p>Wallet Connected: {wallet}</p>
            )}
        </div>
    );
};

export default WalletConnect;
