import { Movie } from '@app/types';

const applyFilters = (movies: Movie[], query: string): Movie[] =>
  movies.filter((movie: any) => {
    let matches = true;

    if (query) {
      const properties = ['title'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (movie[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    return matches;
  });

export default applyFilters;
