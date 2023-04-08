import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState('')
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  }, [])
  
  return (
    <div  className='banner' style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}>
        <div className='content'>
            <h1 className='title'>{movie.title}</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>
                {movie.overview}
            </h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner