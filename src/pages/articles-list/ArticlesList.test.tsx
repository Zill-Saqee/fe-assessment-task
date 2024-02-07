import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ArticlesList from './ArticlesList';

import * as articlesApi from '../../services/articlesApi';
import { QueryActionCreatorResult, QueryDefinition, BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { store } from '../../store/store';

test('renders loading state', () => {
    jest.spyOn(articlesApi, 'useGetMostPopularArticlesQuery').mockReturnValue({
        data: null,
        isLoading: true,
        isError: false,
        refetch: function (): QueryActionCreatorResult<QueryDefinition<void, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, articlesApi.ArticlesApiResponse, 'articlesApi'>> {
            throw new Error('Function not implemented.');
        }
    });
  
    render(
      <Provider store={store}>
        <ArticlesList />
      </Provider>
    );
  
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

test('renders error state', () => {
  jest.spyOn(articlesApi, 'useGetMostPopularArticlesQuery').mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
      refetch: function (): QueryActionCreatorResult<QueryDefinition<void, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, articlesApi.ArticlesApiResponse, 'articlesApi'>> {
          throw new Error('Function not implemented.');
      }
  });

  render(
    <Provider store={store}>
      <ArticlesList />
    </Provider>
  );

  const errorElement = screen.getByText(/Error: Unable to fetch articles./i);
  expect(errorElement).toBeInTheDocument();
});

