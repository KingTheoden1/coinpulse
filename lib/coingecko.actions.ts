'use server';

import qs from 'query-string';

const BASE_URL = process.env.COINGECKO_BASE_URL?.replace(/\/$/, '');
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL) throw new Error('Could not get base url');
if (!API_KEY) throw new Error('Could not get api key');

export async function fetcher<T>(
  endpoint: string,
  params?: QueryParams,
  revalidate = 60,
): Promise<T> {
  const url = qs.stringifyUrl(
    {
      url: `${BASE_URL}/${endpoint.replace(/^\//, '')}`,
      query: params,
    },
    { skipEmptyString: true, skipNull: true },
  );

  const isPro = url.includes('pro-api');
  const headerName = isPro ? 'x-cg-pro-api-key' : 'x-cg-demo-api-key';

  const response = await fetch(url, {
    headers: {
      [headerName]: API_KEY,
      'Content-Type': 'application/json',
    } as Record<string, string>,
    next: { revalidate },
  });

  if (!response.ok) {
    const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));

    console.error(`API Error on URL: ${url}`);
    throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText} `);
  }

  return response.json();
}

export async function getPools(
  id: string,
  network?: string | null,
  contractAddress?: string | null,
): Promise<PoolData> {
  const fallback: PoolData = {
    id: '',
    address: '',
    name: '',
    network: '',
  };

  if (network && contractAddress) {
    try {
      const response = await fetcher<{ data: any[] }>(
        `onchain/networks/${network}/tokens/${contractAddress}/pools`,
      );

      const pool = response.data?.[0];
      if (!pool) return fallback;

      return {
        id: pool.id,
        address: pool.attributes?.address || '',
        name: pool.attributes?.name || '',
        network: network,
      };
    } catch (error) {
      console.error('Error fetching token pools:', error);
      return fallback;
    }
  }

  try {
    const response = await fetcher<{ data: any[] }>('onchain/search/pools', { query: id });

    const pool = response.data?.[0];
    if (!pool) return fallback;

    return {
      id: pool.id,
      address: pool.attributes?.address || '',
      name: pool.attributes?.name || '',
      network: pool.relationships?.network?.data?.id || '',
    };
  } catch (error) {
    console.error('Error searching pools:', error);
    return fallback;
  }
}

export async function searchCoins(query: string): Promise<SearchCoin[]> {
  try {
    const response = await fetcher<{ coins: SearchCoin[] }>('search', { query });
    return response.coins || [];
  } catch (error) {
    console.error('Error searching coins:', error);
    return [];
  }
}