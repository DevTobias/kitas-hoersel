/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { website } from '$lib/config';
import { isLocale } from '$lib/i18n/i18n-util';
import { localeToCode } from '$lib/i18n/localeToCode';

export const gql = String.raw;

interface OptionalParams {
  variables?: unknown;
  translated?: boolean;
  fetcher?: Fetcher;
}

export type Fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;

export const localizedQuery = (query: string, locale: string | Locales) => {
  if (!isLocale(locale)) {
    throw new Error('locale does not exist');
  }
  return query.replace('{{LOCALE}}', localeToCode(locale));
};

export const fetchGQL = async <T>(query: string, name: string, params?: OptionalParams) => {
  const fetcher = params?.fetcher ?? fetch;
  const res = await fetcher(`${website.cmsEndpoint}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables: params?.variables || {},
    }),
  });

  if (!res.ok) {
    throw Error(await res.text());
  }

  const data = (await res.json()).data[name];
  return params?.translated ? (data.translations[0] as T) : (data as T);
};