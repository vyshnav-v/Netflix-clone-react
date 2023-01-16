import React, { useEffect, useState } from 'react';
import "./Banner.css"
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/constants';
function Banner() {
  const [movie,setMovie]=useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
      
      // console.log(movie);
      
    })
  }, [])
  useEffect(() => {
    console.log(movie)
  },[movie])
  return (
    <div
      style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
      className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="baner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h3 className="description">{movie ? movie.overview : ""}</h3>

      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;