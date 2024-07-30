const key = "632263edb588b456786ff279e4e12517";

export const requests = {
  PopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
};

export default requests;
