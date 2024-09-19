import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/simple/price'; // Example API

// Function to fetch conversion rate
export const getCryptoToUSDCRate = async (cryptoSymbol = 'solana', currency = 'usdc') => {
    try {
        const response = await axios.get(`${API_URL}?ids=${cryptoSymbol}&vs_currencies=${currency}`);
        return response.data[cryptoSymbol][currency];
    } catch (error) {
        console.error('Error fetching the conversion rate:', error);
        return null;
    }
};
