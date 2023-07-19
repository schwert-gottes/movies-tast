import React from 'react';
import { Card, Breadcrumbs } from '@app/components';
import { Container, GridItem, Grid } from '@chakra-ui/react';
import type { PageProps } from '@app/pages/[id]';

const Movie = ({ movie }: PageProps) => {
  return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(1, 1fr)" my={10}>
        <GridItem mb={4}>
          <Breadcrumbs name="Avengers" />
        </GridItem>
        <GridItem>
          <Card {...movie} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Movie;
