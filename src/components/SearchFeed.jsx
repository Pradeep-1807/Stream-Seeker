import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import MovieCard from './MovieCard';
import Sidebar from './Sidebar';
import Loader from './Loader';

const SearchFeed = () => {

  const {searchText} = useParams();
  const [searchFeedContent, setSearchFeedContent] = useState(null)


  useEffect(()=>{
    fetchData(`search?query=${searchText}`)
      .then((data)=>{
        setSearchFeedContent(data.contents)
      })
  },[searchText])


  if (!searchFeedContent){
    return(
      <>
      <div className='flex gradient-background flex-col gap-5 h-screen justify-center items-center'>
        <h1 className='m-10 text-base sm:text-3xl font-cutive font-bold text-gray-400'>Search results for "{searchFeedContent && searchFeedContent.query || searchText}"</h1>
        <Loader />
      </div>
      </>
  )
  }

  if (searchFeedContent.length <= 0){
        return(
            <div className='flex gradient-background flex-col gap-5 h-screen justify-center items-center'>
              <h1 className='m-10 text-xl sm:text-3xl font-cutive font-bold text-gray-400'>No results found</h1>
            </div>
        )
  }


 

  
/*
  if (searchFeedContent.length <= 0){
    return(
        <div className='flex gradient-background flex-col gap-5 h-screen justify-center items-center'>
          <h1 className='m-10 text-xl sm:text-3xl font-cutive font-bold text-gray-400'>No results found</h1>
        </div>
    )
     
  }
*/
  return (
    <>
    <div className='min-h-screen  gradient-background sm:ml-[5vw] pb-[10vh] sm:pb-5 p-0 sm:p-3 flex flex-col items-center'>
      <h1 className='m-10 text-xl sm:text-3xl font-cutive font-bold text-gray-400'>Search results for "{searchText}"</h1>
      <div className='h-auto w-full flex justify-center gap-5 flex-wrap'>
      {searchFeedContent && searchFeedContent.map((movie, index) => (
        <MovieCard
          key={index}
          currentMovie={movie}
          cardHeight={'h-[120px]'}
          cardWidth={'w-[25vw]'}
          maxHeight={'sm:h-[250px]'}
          maxWidth={'sm:w-[200px]'}
        />
      ))}

      </div>
    </div>
    
    <Sidebar />
    </>
    
    
  )
}

export default SearchFeed
