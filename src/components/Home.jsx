import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';


const Home = () => {

    return (
        <div className='h-auto'>
            <Navbar />
            <Content />
            <Sidebar />
        </div>
    );
}

export default Home;
