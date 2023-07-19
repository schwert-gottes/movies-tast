import React from 'react';
import { axios } from '@app/utils';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import type { Movie } from '@app/types';
import { Movie as MoviePage } from '@app/views';

interface PageProps {
  movie: Movie;
}

const Slug = ({ movie }: PageProps) => {
  return <MoviePage movie={movie} />;
};

const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;
  const response = await axios.get(
    `/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return {
    props: {
      movie: response?.data,
    },
  };
};

export { getServerSideProps };
export type { PageProps };
export default Slug;
