import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Article } from '../constants/types';
import config from '../constants/config';
  
export interface ArticlesApiResponse {
    status: string;
    copyright: string;
    num_results: number;
    results: Article[];
}

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.BASE_URL }),
  endpoints: (builder) => ({
    getMostPopularArticles: builder.query<ArticlesApiResponse, void>({
      query: () => `viewed/1.json?api-key=${config.API_KEY}`,
    }),
  }),
});

export const { useGetMostPopularArticlesQuery } = articlesApi;
