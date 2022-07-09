import { useEffect, useState } from "react";
import "../row.css"
import axios from "../components_for_browse/axios";
import Youtube from'react-youtube';
import movieTrailer  from "movie-trailer";
import { useSearchParams } from "react-router-dom";

const base_url = "http://image.tmdb.org/t/p/original/"
function Row({ label, fetchUrls, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerURL] = useState("")


    

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
   

    useEffect(() => {
        async function fetchApi() {
            const request = await axios.get(fetchUrls)
            setMovies(request.data.results)
                // console.log(request.data.results)
                return (request)
        }
        fetchApi()
    }, [fetchUrls])



    const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerURL("");
        } else {
          movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerURL(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
      };

    return (

        <div className="rows">
            <h2 className="h2_for_row">{label}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img 
                    onClick={() => handleClick(movie)} 
                    key={movie.id}  
                    className={`row__poster  ${isLargeRow && `row__posterLarge`}`} 
                    src={isLargeRow ? `${base_url}${movie.poster_path}` : `${base_url}${movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
// const isLargeRow = true;
export default Row;