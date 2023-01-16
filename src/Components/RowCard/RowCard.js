import React, { useEffect, useState } from 'react'
import "./RowCard.css"
import axios from "../../axios";
import { API_KEY, imageUrl } from '../../Constants/constants';
import YouTube from 'react-youtube';
function RowCard(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
      axios.get(props.url).then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
    }, [props.url]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    const handleMovie = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log('Trailer not available');
            }
        })
    }
  return (
    <div className='row'>
          <h1>{props.title}</h1>
          <div className="posters">
              {movies.map((obj)=>
                  
                  <img key={obj.id} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="post" />
                  
)}
              
          </div>
          {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowCard
