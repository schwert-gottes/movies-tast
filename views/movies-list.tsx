import React from 'react';
import { Table, Filters } from '@app/components';
import { Container } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import { Grid, GridItem, Heading, Box } from '@chakra-ui/react';
import type { PageProps, FilterValue } from '@app/pages/index';
import type { Movie } from '@app/types';

interface MovieListProps extends PageProps {
  onRadioClick: (value: FilterValue) => Promise<void>;
  onSearch: (value: string) => void;
}

const MovieList = ({ results, onRadioClick, onSearch }: MovieListProps) => {
  const data: Movie[] = results;

  const columnHelper = createColumnHelper<Movie>();

  const columns = [
    columnHelper.accessor('title', {
      cell: (info) => info.getValue(),
      header: 'Title',
    }),
    columnHelper.accessor('original_language', {
      cell: (info) => info.getValue(),
      header: 'Language',
    }),
    columnHelper.accessor('vote_count', {
      cell: (info) => info.getValue(),
      header: 'Views',
    }),
    columnHelper.accessor('vote_average', {
      cell: (info) => info.getValue(),
      header: 'Rating',
      meta: {
        isNumeric: true,
      },
    }),
  ];

  return (
    <Container maxW="container.xl">
      <Box my={10}>
        <Grid
          w="100%"
          templateColumns="repeat(1, 1fr)"
          gap={6}
          textAlign="center"
        >
          <GridItem>
            <Heading as="h1" size="lg">
              Ultimate Moviegoers Guide
            </Heading>
          </GridItem>
          <GridItem>
            <Filters onRadioClick={onRadioClick} onSearch={onSearch} />
          </GridItem>
          <GridItem>
            <Table columns={columns} data={data} />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default MovieList;
