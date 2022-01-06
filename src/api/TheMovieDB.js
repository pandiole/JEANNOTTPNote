const API_KEY = 'f60dc1588d1b92e483f83fa137b9f5ab';

export async function getMovies(searchterm = '', offset = 1) {
  try {
    // const myHeaders = new Headers({ 'api_key': API_KEY });
       const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(`Error with function getMovies ${error.message}`);
    throw error;
  }
};