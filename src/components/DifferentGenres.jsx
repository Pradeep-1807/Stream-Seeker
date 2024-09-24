
import React from 'react'
import SingeGenre from './SingeGenre';

const DifferentGenres = ({homeContent}) => {

    return (
        <div className=' p-2 sm:px-3 w-full pb-[8vh] sm:pb-5' >
            {homeContent.map((currentGenre,index)=>{
                return (
                    <SingeGenre key={index} currentGenre={currentGenre} />
                )
            })}
        </div>
    )
        
}

export default DifferentGenres
