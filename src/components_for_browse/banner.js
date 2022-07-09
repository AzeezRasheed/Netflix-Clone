import { useEffect, useState } from "react"
import axios from '../components_for_browse/axios'
import requests from "../components_for_browse/request"
// import './banner.css'
import './banner.css'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'

function Banner() {
    function trunctate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
        }
        fetchData();
    }, [])


    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
            )`,
            backgroundPosition: "center center"
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">
                       <FaPlay/> Play
                    </button>
                    <button className="banner_button">
                       <AiOutlineInfoCircle/> More Info
                    </button>
                </div>
                <h1 className="banner_description"> {trunctate(movies?.overview, 150)} </h1>
        </div>
        <div className="banner--fadeButton"></div>
        </header >
    )

}

export default Banner;