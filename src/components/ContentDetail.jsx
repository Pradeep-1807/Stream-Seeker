import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
import { fetchData } from '../utils/fetchData';
import Loader from './Loader';
import '../App.css';

const ContentDetail = () => {
    const { contentId } = useParams();
    const location = useLocation();
    const pathNames = location.pathname.split('/');
    const contentType = pathNames[1];
    const [contentDetails, setContentDetails] = useState(null);

    useEffect(() => { 
        fetchData(`${contentType}/${contentId}`)
            .then((data) => {
                setContentDetails(data);
            });
    }, [contentType, contentId]);



    if (!contentDetails){
        return(
            <div className='flex min-h-screen justify-center items-center gradient-background'>
                <Loader />
            </div>
        )
         
    }

    const { backdrop_path = '', title = '', release_date = '',  overview = '', genres = [], youtube_trailer = '', sources = [], } = contentDetails[contentType] || {};
    const description = overview.slice(0, 300);


    

    return (
        <div className='gradient-background max-w-screen'>
            <div className='max-w-screen h-screen bg-cover bg-center p-3 sm:p-5 bg-gray-500' style={{backgroundImage:`url(${backdrop_path})`}}>
                <div className='h-[100%] w-[100%] p-0 sm:p-5 rounded-xl movieContent text-white overflow-y-auto flex justify-start items-center'>
                    <div className='h-full lg:h-auto w-[100%] lg:w-[50%] p-5 border-red-600 border-4 flex flex-col justify-center items-center gap-8 sm:gap-10 overflow-y-auto rounded-xl'>
                        <h1 className='text-2xl sm:text-4xl font-bold font-sedan text-yellow-500 outline-2 outline-black gradient-background px-2 py-1 sm:px-3 sm:py-2 rounded-xl'>{title}</h1>
                        <h3 className='text-base sm:text-[20px]'>{release_date.slice(0,4)}</h3>
                        <p className='text-sm sm:text-[16px] text-justify'>{`${description}...`}</p>
                        <div className='flex items-center justify-around flex-wrap gap-3 w-full h-auto'>
                            {genres.map((item, index) => (
                                <h2 key={index} className='inline px-2 py-1 sm:px-3 sm:py-1 bg-teal-700 rounded-lg cursor-pointer'>{item}</h2>
                            ))}
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className="px-4 py-1.5 sm:py-3 bg-red-600 rounded-lg">
                                <a href={youtube_trailer} className="text-white text-sm sm:text-base outline-none border-none">Watch trailer</a>
                            </div>
                        </div>
                        <div className='flex justify-center flex-wrap gap-5'>
                            {sources.map((source, index) => (
                                <a href={source?.link} key={index} className="bg-blue-500 px-5 py-1 sm:py-2 rounded-lg">{source?.display_name}</a>
                            ))}
                        </div>  
                    </div>
                </div>
            </div>

            <div className=' h-auto w-full flex flex-col items-start gap-5 p-2 sm:p-4'>
                {
                    contentDetails.similarMovies && <h3 className='text-xl sm:text-3xl font-cutive font-bold mt-16 text-gray-400'>Similar Movies</h3> 
                }
                
                <div className='max-w-screen flex justify-center gap-10 flex-wrap'>
                    {contentDetails.similarMovies?.map((movie, index) => (
                        <MovieCard
                            key={index}
                            currentMovie={movie}
                            cardHeight={'h-[120px]'}
                            cardWidth={'w-[25vw]'}
                            maxHeight={'sm:h-[200px]'}
                            maxWidth={'sm:w-[150px]'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContentDetail;
