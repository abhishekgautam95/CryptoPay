import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";

// Setup Solana connection
const connection = new Connection(clusterApiUrl("devnet"));

// Setup provider
const provider = new AnchorProvider(connection, wallet, {
  commitment: "processed",
});

// Load the program
const programId = new PublicKey("YOUR_PROGRAM_ID");
const program = new Program(idl, programId, provider);

// Call the initialize_user function
async function initializeUser(userWallet) {
  await program.rpc.initializeUser(userWallet, {
    accounts: {
      user: userWallet,
      payer: provider.wallet.publicKey,
      systemProgram: web3.SystemProgram.programId,
    },
    signers: [],
  });
}

// Call the transfer_tokens function
async function transferTokens(from, to, amount) {
  await program.rpc.transferTokens(new web3.BN(amount), {
    accounts: {
      fromAccount: from,
      toAccount: to,
      authority: provider.wallet.publicKey,
      tokenProgram: TOKEN_PROGRAM_ID,
    },
    signers: [],
  });
}