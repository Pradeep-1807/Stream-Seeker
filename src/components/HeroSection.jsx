import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import '../App.css'; 
import HeroContent from './HeroContent';

const Carousel = ({homeContent}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    
    const navigate = useNavigate();

    const handleClick =(contentType, contentId)=>{
        
        navigate(`/${contentType}/${contentId}`)
    
    }
  
    useEffect(() => {
        if (homeContent) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % movieList.length);
            }, 3000); 
            return () => clearInterval(interval);
        }
    }, [homeContent]);


    const {movies} = homeContent || {};
    const movieList = movies ? movies.slice(0,5) : [];



    if (!homeContent){
        return(
            <div className='flex h-screen justify-center items-center'>
                <Loader />
            </div>
        )
         
    }

    return (
        <div className=' p-2 sm:p-0  w-full cursor-pointer' >
            <div className="carousel-container h-full">
                <div className="carousel h-full" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                    {movieList &&
                        movieList.map((currentMovie, index) => (
                            <div
                                onClick={()=> handleClick(currentMovie?.contentType,currentMovie?._id)}
                                key={index}
                                className="carousel-item h-[60vh] md:h-[85vh]"
                                style={{
                                    backgroundImage: `url(${currentMovie.backdrop_path})`,
                                }}>
                                    <HeroContent currentMovie={currentMovie} handleClick={handleClick} />
                                    
                            </div>
                        ))}
                </div>
            </div>
        </div>
        
    );
};

export default Carousel;
