import React from 'react'
import { useState, useEffect } from 'react';

import HeroSection from './HeroSection';
import DifferentGenres from './DifferentGenres';
import { fetchData } from '../utils/fetchData';

const Content = () => {

    const [homeContent, setHomeContent] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);


    useEffect(() => {
        fetchData(`home`)
            .then((data) => {
                setHomeContent(data);
            })
            
    }, []);

    return (
        <div className='gradient-background h-[90vh] sm:ml-[5vw] w-screen sm:w-[95vw] overflow-x-hidden'>
            <HeroSection homeContent={homeContent[0]} />
            <DifferentGenres homeContent={homeContent.slice(1,homeContent.length)} />
        </div>
    )
}

export default Content
