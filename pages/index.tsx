import React, { useState } from 'react';
import { MoviesList } from '@app/views';
import { axios, applyFilters } from '@app/utils';
import { GetServerSideProps } from 'next';
import type { Movie } from '@app/types';

type FilterValue = '1' | '2' | '3';

interface PageProps {
  results: Movie[];
}

interface FilterResponse {
  data: PageProps;
}

const Index = ({ results }: PageProps) => {
  const [movies, setMovies] = useState<Movie[]>(results ?? []);
  const [query, setQuery] = useState<string>('');

  const onRadioClick = async (value: FilterValue): Promise<void> => {
    let response: FilterResponse;

    if (value === '1') {
      response = await axios.get(
        `/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
    } else if (value === '2') {
      response = await axios.get(
        `/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
    } else {
      response = await axios.get(
        `/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
    }

    setMovies(response?.data?.results);
    setQuery('');
  };

  const onSearch = (query: string): void => {
    setQuery(query);
  };

  const filteredMovies = applyFilters(movies, query);

  return (
    <MoviesList
      results={filteredMovies}
      onRadioClick={onRadioClick}
      onSearch={onSearch}
    />
  );
};

const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios(
    `/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return {
    props: {
      results: response?.data?.results ?? [],
    },
  };
};

export { getServerSideProps };
export type { PageProps, FilterValue };
export default Index;
