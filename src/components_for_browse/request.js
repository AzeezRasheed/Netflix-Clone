import axios from "axios";

const Api_Key = `e0a1c93c1678d0bb9cdc50c28b887eb3`

const requests = {
    fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`
}

export default requests;