import axios from 'axios';

export const bitcoinService = {
  getRate,
  getMarketPrice,
};

async function getRate(coins) {
  const { data } = await axios.get(
    ` https://blockchain.info/tobtc?currency=USD&value=${coins}`
  );
  return data;
}

async function getMarketPrice() {
  const { data } = await axios.get(
    `https://api.blockchain.info/charts/market-price`,
    {
      params: {
        timespan: '5months',
        format: 'json',
        cors: true,
      },
    }
  );

  return data;
}
