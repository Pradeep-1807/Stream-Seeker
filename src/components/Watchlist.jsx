import React, { useContext } from 'react'
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import Sidebar from './Sidebar'
import '../App.css'
import MovieCard from './MovieCard'
import UserInfoContext from './context/UserInfoContext'


const Watchlist = () => {

    const {watchlist} = useContext(UserInfoContext);

    if (!watchlist || watchlist.length<=0){
        return (
            <>
            <div className='h-screen w-screen flex flex-col justify-center items-center gap-5  gradient-background'>
                <PlaylistRemoveIcon sx={{fontSize:{xs:'70px', sm:'120px'}, color:'gray'}} />
                <h3 className='text-base sm:text-lg text-gray-400 font-cutive'>Watchlist is Empty</h3>
            </div>
            <Sidebar />
            </>
        )
    }

    return (
        <>
            <div className='min-h-screen sm:ml-[5vw] gradient-background flex flex-col items-center gap-10 pb-[10vh] sm:pb-5 '>
            <h2 className='text-base sm:text-2xl text-gray-400 font-bold font-cutive mt-10'>Watchlist</h2>
            <div className='flex w-full justify-center gap-5 flex-wrap'>
                {
                    watchlist && watchlist.map((movie,index)=>(
                        <MovieCard key={index} currentMovie={movie} cardHeight={'h-[120px]'} cardWidth={'w-[100px]'} maxHeight={'sm:h-[250px]'} maxWidth={'sm:w-[200px]'} display={'hidden'} deleteDisplay={'block'}  />
                    ))
                }
            </div>
            </div>
            <Sidebar />
        </>
  )
}

export default Watchlist
