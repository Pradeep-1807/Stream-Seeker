import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import Sidebar from './Sidebar';
import Loader from './Loader';
import '../App.css';

const SingleGenreHomePage = () => {
  const [singleGenreMovies, setSingleGenreMovies] = useState(null);
  const { genreId } = useParams();


  useEffect(() => {
    fetchData('home').then((data) => {
      const filteredMovies = data.filter((movie) => movie.title === genreId);
      setSingleGenreMovies(filteredMovies);
    });
  }, [genreId]);



  if (!singleGenreMovies){
    return(
        <div className='flex min-h-screen justify-center items-center gradient-background'>
            <Loader />
        </div>
    )
     
  }
  

  return (
    <>
    <div className=' h-auto w-screen sm:w-[95vw] gradient-background flex flex-col items-center sm:ml-[5vw] pb-[10vh] sm:pb-5 '>
      <h2 className=' h-full m-10 text-xl sm:text-3xl font-cutive font-bold text-gray-400'>{singleGenreMovies && singleGenreMovies[0].title}</h2>
      <div className='h-auto  w-full flex gap-4 justify-center flex-wrap sm:p-2'>
        {singleGenreMovies && singleGenreMovies[0].movies.map((currentMovie,movieIndex)=>{
          return(
            <MovieCard key={movieIndex} currentMovie={currentMovie} cardHeight={'h-[120px]'} cardWidth={'w-[25vw]'} maxHeight={'sm:h-[250px]'} maxWidth={'sm:w-[200px]'}  />
          )
        })}
      </div>
    </div>

    <Sidebar />
    </>
  );
};

export default SingleGenreHomePage;
