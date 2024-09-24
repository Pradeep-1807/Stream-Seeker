import React from 'react'
import '../App.css'; 

const HeroContent = ({currentMovie, handleClick}) => {


  const contentType = currentMovie &&  currentMovie.contentType;
  const contentId = currentMovie &&  currentMovie._id;

  return (
    <div onClick={()=>{handleClick(contentType, contentId)}}  className=' movieContent overflow-auto h-full w-full sm:w-[50%] cursor-pointer md:w-[40%] xl:w-[30%] p-5 flex flex-col justify-around items-center gap-5 text-justify text-white'>

        <img src={currentMovie.poster_path} alt={`${currentMovie.title} image`} className='h-[40%] w-[60%] rounded-xl hidden sm:block outline-2 outline-offset-2 outline-yellow-500'/>
        <h3 className='text-lg sm:text-2xl font-cutive '>{currentMovie.title}</h3>
        <p >{currentMovie.overview.slice(0,150)}...</p>
        <div className='flex justify-around flex-wrap gap-5'>
            {currentMovie.genres.map((genre,index)=>{
            return(
                <h4 className=' px-2 py-1 sm:px-3 sm:py-1 bg-teal-700 rounded-lg cursor-pointer' key={index}>{genre}</h4>
            )
            })}
        </div>
        
    </div>
          
  )
}

export default HeroContent
