import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import type { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import type { ResponseHandler } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import type { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';

import type { Search, SearchQueryParams, SearchResponse, SearchTerm } from '../types';

/**
 * Create API Endpoint Builder Type
 */
type Builder = EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, 'shazamApi'>;

/**
 * Use Search Query
 */
type SearchQuery = {
    url: string;
    params: SearchQueryParams;
    responseHandler: ResponseHandler;
};

/**
 * Base Backend API URL
 */
const baseUrl: string = `${process.env.REACT_APP_SHAZAM_API_URL}`;

/**
 * Shazam API
 * @docs https://rapidapi.com/apidojo/api/shazam
 */
export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers: Headers): MaybePromise<Headers> => {
            headers.set('X-RapidAPI-Key', `${process.env.REACT_APP_RAPID_API_KEY}`);
            headers.set('X-RapidAPI-Host', `${process.env.REACT_APP_RAPID_API_HOST}`);
            return headers;
        },
    }),
    endpoints: (builder: Builder) => ({
        search: builder.query<Search, any>({
            query: ({ term }: SearchTerm): SearchQuery => ({
                url: `/search`,
                params: {
                    term: `${term}`,
                    locale: 'en-US',
                    offset: '0',
                    limit: '5'
                },
                responseHandler: async (res: Response) => await res.json(),
            }),
            transformResponse: (response: SearchResponse) => response,
        }),
    }),
});

export const {
    useSearchQuery,
} = shazamApi;
