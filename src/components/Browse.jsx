import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components_for_browse/nav'
import Banner from '../components_for_browse/banner'
import requests from '../components_for_browse/request'
import Row from '../components/row'
import Footer from "../footer/Footer";
function Browse() {
  return (
    <div className="app">
            <Nav/>
            <Banner />
            <Row label="NETFLIX ORIGINALS" fetchUrls={requests.fetchNetflixOriginals} isLargeRow />
            <Row label="TRENDING NOW" fetchUrls={requests.fetchTrending} />
            <Row label="TOP RATED" fetchUrls={requests.fetchTopRated} />
            <Row label="ACTION MOVIES" fetchUrls={requests.fetchActionMovies} />
            <Row label="COMEDY MOVIES" fetchUrls={requests.fetchComedyMovies} />
            <Row label="HORROR MOVIES" fetchUrls={requests.fetchHorrorMovies} />
            <Row label="ROMANCE MOVIES" fetchUrls={requests.fetchRomanceMovies} />
            <Row label="DOCUMENTARIES" fetchUrls={requests.fetchDocumentaries} />
            <Footer/>
        </div>
  )
}

export default Browse