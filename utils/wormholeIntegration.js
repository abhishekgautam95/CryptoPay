// src/utils/wormholeIntegration.js

import { getEmitterAddressSolana, transferFromSolana, redeemOnEth } from '@certusone/wormhole-sdk';
import { Connection, PublicKey, clusterApiUrl, Keypair } from '@solana/web3.js';
import { ethers } from 'ethers';

export async function transferSolanaToEthereum(amount, tokenAddress, recipientAddress) {
  // Solana connection setup
  const solanaConnection = new Connection(clusterApiUrl('devnet'));
  const solanaWallet = Keypair.generate();
  const solanaPublicKey = new PublicKey(solanaWallet.publicKey);

  // Ethereum connection setup
  const ethProvider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
  const ethSigner = ethProvider.getSigner();

  // Step 1: Get Emitter Address for Solana
  const emitterAddressSolana = await getEmitterAddressSolana('TOKEN_BRIDGE_ADDRESS');

  // Step 2: Transfer tokens from Solana to Ethereum via Wormhole
  const transactionId = await transferFromSolana(
    solanaConnection,
    solanaPublicKey,
    tokenAddress,
    amount,
    emitterAddressSolana,
    recipientAddress
  );

  // Step 3: Redeem the transferred token on Ethereum
  const signedVAA = await fetchSignedVAA(transactionId); // fetch VAA from guardian
  await redeemOnEth(
    ethProvider,
    ethSigner,
    'TOKEN_BRIDGE_ADDRESS_ETH',
    signedVAA
  );

  console.log('Transfer successful!');
}
