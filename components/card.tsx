import React from 'react';
import {
  Card as CardWrapper,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from '@chakra-ui/react';
import type { Companies, Movie, Production, Genre } from '@app/types';
import numeral from 'numeral';

const Card = ({
  title,
  overview,
  production_countries,
  production_companies,
  status,
  tagline,
  release_date,
  runtime,
  vote_average,
  genres,
  revenue,
}: Movie) => {
  const value = numeral(revenue).format('0,0');
  return (
    <CardWrapper>
      <CardHeader>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Heading size="md">{title}</Heading>
            <Text fontSize="sm">{tagline}</Text>
            <Box mt={2}>
              <Heading size="md">Revenue: </Heading>
              <Text fontSize="sm">${value}</Text>
            </Box>
          </Box>

          <Box>
            <Box display="flex">
              <Heading size="sm">Release Date: </Heading>
              <Text fontSize="sm"> {release_date}</Text>
            </Box>
            <Box display="flex">
              <Heading size="sm">Runtime: </Heading>
              <Text fontSize="sm"> {runtime} min</Text>
            </Box>
            <Box display="flex">
              <Heading size="sm">Rating: </Heading>
              <Text fontSize="sm"> {vote_average}</Text>
            </Box>
          </Box>
        </Box>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Genres
            </Heading>
            {genres?.map((item: Genre) => (
              <Text key={item.id} pt="2" fontSize="sm">
                {item.name}
              </Text>
            ))}
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <Text pt="2" fontSize="sm">
              {overview}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Status
            </Heading>
            <Text pt="2" fontSize="sm">
              {status}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Production Country
            </Heading>
            {production_countries?.map((item: Production) => (
              <Text key={item.iso_3166_1} pt="2" fontSize="sm">
                {item?.name}
              </Text>
            ))}
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Production Companies
            </Heading>
            {production_companies?.map((item: Companies) => (
              <Text key={item.id} pt="2" fontSize="sm">
                {item?.name}
              </Text>
            ))}
          </Box>
        </Stack>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
