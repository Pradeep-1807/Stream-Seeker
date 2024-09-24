import React from 'react'
import { useState,useEffect } from 'react';
import Sidebar from './Sidebar'
import { fetchData } from '../utils/fetchData';
import MovieCard from './MovieCard';
import Loader from './Loader';
import '../App.css';

const MovieCollections = () => {

  const [movieCollections, setMovieCollections] = useState(null)

  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  
  useEffect(()=>{
    fetchData(`movies`)
      .then((data)=>{
        setMovieCollections(data.movies)
      })
  },[])
  

  if (!movieCollections){
    return(
        <div className='flex min-h-screen justify-center items-center gradient-background'>
            <Loader />
        </div>
    )
     
  }

  return (
    <>
    <div className='min-h-screen  gradient-background sm:ml-[5vw] pb-[10vh] sm:pb-5 p-0 sm:p-3 flex flex-col items-center'>
    <h2 className=' m-10 text-xl sm:text-3xl font-cutive font-bold text-gray-400 '>Movie Collections</h2>
      <div className=' flex justify-center gap-5 flex-wrap '>
          {
            movieCollections && movieCollections.map((movie,index)=>{
              return (
                <MovieCard key={index} currentMovie={movie} cardHeight={'h-[120px]'} cardWidth={'w-[100px]'} maxHeight={'sm:h-[250px]'} maxWidth={'sm:w-[200px]'}  />
              )
            })
          }
      </div>
    </div>
    <Sidebar />
    </>
  )
}

export default MovieCollections
