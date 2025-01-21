import axios from 'axios';
import { CoinSymbol, CryptoRate } from '../types/crypto';

const API_URL = 'https://app.youhodler.com/api/v3/rates/extended';

export const fetchCryptoRates = async (): Promise<Record<CoinSymbol, Record<CoinSymbol, CryptoRate>>> => {
  try {
    const response = await axios.get<Record<CoinSymbol, Record<CoinSymbol, CryptoRate>>>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto rates:', error);
    throw error;
  }
};