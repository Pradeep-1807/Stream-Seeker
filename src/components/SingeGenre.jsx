import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import '../App.css';
import MovieCard from './MovieCard';

const SingleGenre = ({ currentGenre }) => {


  return (
    <div className='h-[20vh] sm:h-[35vh] w-full  mx-1 my-10 sm:my-20 '>
      <div className='h-[15%] flex justify-between items-center mb-2 mt-16 sm:mt-[70px]  '>
        <h2 className=' font-cutive font-bold text-sm sm:text-lg text-gray-400 ' >{currentGenre.title}</h2>
        <Link to={`/home/${currentGenre.title}`} >
          <ArrowForwardIosIcon className=' cursor-pointer mr-2 ' sx={{fontSize:'20px'}}/>
        </Link>
      </div>

      <div className='h-[85%] flex overflow-visible '>
        <div className='flex gap-4 overflow-visible ' style={{ minWidth: `${currentGenre.movies.length * 200}px` }}>
          {currentGenre.movies && currentGenre.movies.map((currentMovie, movieIndex) => (
            <MovieCard key={movieIndex} currentMovie={currentMovie} cardHeight={'h=[150px]'} cardWidth={'w-[100px]'} maxWidth={'sm:w-[200px]'} maxHeight={'sm:h-[250px]'}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleGenre;
