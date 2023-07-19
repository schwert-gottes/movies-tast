type Production = {
  iso_3166_1: string;
  name: string;
};

type Companies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type Genre = {
  id: number;
  name: string;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_countries: Production[];
  production_companies: Companies[];
  status: string;
  tagline: string;
  runtime: number;
  genres: Genre[];
  revenue: number;
};

export type { Movie, Production, Companies, Genre };
