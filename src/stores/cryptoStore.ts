import { makeAutoObservable, runInAction } from 'mobx';
import { fetchCryptoRates } from '../api/cryptoApi';
import { CoinSymbol, CryptoRate } from '../types/crypto';

class CryptoStore {
  rates: Record<CoinSymbol, Record<CoinSymbol, CryptoRate>> = {};
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadRates = async () => {
    this.loading = true;
    this.error = null;

    try {
      const data = await fetchCryptoRates();
      runInAction(() => {
        this.rates = data;
        this.loading = false;
      });
    } catch (err: any) {
      runInAction(() => {
        this.error = err.message || 'Failed to fetch rates';
        this.loading = false;
      });
    }
  }
}

const cryptoStore = new CryptoStore();
export default cryptoStore;