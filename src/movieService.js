// In the scope of the code event, you shouldn't have to modify
// this file.

// After 6/1/2019 This api key will expire
// in order to get your own register an account with https://www.themoviedb.org/

const API_KEY = "27e2e355f28801290386c6901cd12d00";
const API_URL = "https://api.themoviedb.org/3";
const QUERY = `/trending/movie/week`;
const API_KEY_QUERY = `?api_key=${API_KEY}`;

const QUERY_STRING = `${API_URL}${QUERY}${API_KEY_QUERY}`;

const STORAGE_KEY = "movies-service";

export const getMovies = async () => {
  // See if we've already saved a list of movies in
  // localStorage, and return that.
  try {
    const movies = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (movies) {
      return movies;
    }
  } catch (e) {
    console.error("Failed to parse movies from localStorage", e);
  }

  // Make a request to the movie database
  const res = await fetch(QUERY_STRING, {
    cache: "force-cache"
  });
  const { results } = await res.json();

  // Munge the result into something we want to use.
  const movies = results.map(({ id, release_date, title, poster_path }) => ({
    id,
    title,
    releaseDate: release_date,
    poster: `https://image.tmdb.org/t/p/w300${poster_path}`
  }));

  // Save the movies into local storage so we don't have
  // to make any future requests.
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  return movies;
};
