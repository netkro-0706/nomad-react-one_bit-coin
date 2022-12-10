const BASE_URL = `https://api.coinpaprika.com/v1`;
const NOMAD_URL = `https://ohlcv-api.nomadcoders.workers.dev`;
//노마드 API 사용법
//https://ohlcv-api.nomadcoders.workers.dev?coinId=btc-bitcoin

export async function fetchCoins() {
  return await fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export async function fetchCoinInfo(coinId: string) {
  return await fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinTickers(coinId: string) {
  return await fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinHistory(coinId: string) {
  return await fetch(`${NOMAD_URL}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
