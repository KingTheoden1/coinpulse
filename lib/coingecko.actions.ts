'use server';

import qs from 'query-string';

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL) throw new Error('Could not get base url');
if (!API_KEY) throw new Error('Could not get api key');

/**
 * Fetches JSON from the CoinGecko API for a given endpoint and returns the parsed response.
 *
 * @param endpoint - Endpoint path appended to the configured base URL (no leading base URL required)
 * @param params - Optional query parameters; empty strings and `null` values are omitted from the query string
 * @param revalidate - Cache revalidation time in seconds used for the fetch request
 * @returns The parsed JSON response typed as `T`
 * @throws Error when the response has a non-OK status; the error message includes the HTTP status and any server-provided error message
 */
export async function fetcher<T>(
  endpoint: string,
  params?: QueryParams,
  revalidate = 60,
): Promise<T> {
  const url = qs.stringifyUrl(
    {
      url: `${BASE_URL}/${endpoint}`,
      query: params,
    },
    { skipEmptyString: true, skipNull: true },
  );

  const response = await fetch(url, {
    headers: {
      'x-cg-demo-api-key': API_KEY,
      'Content-Type': 'application/json',
    } as Record<string, string>,
    next: { revalidate },
  });

  if (!response.ok) {
    const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));

    throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText} `);
  }

  return response.json();
}
