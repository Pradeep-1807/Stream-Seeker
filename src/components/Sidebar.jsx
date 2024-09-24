// Sidebar.js
import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
import TheatersSharpIcon from '@mui/icons-material/TheatersSharp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SidebarButton from './SidebarButton';
import '../App.css';


const Sidebar = () => {

  


  return (
    <div className={`bg-gradient-to-l  from-blue-950 to-cyan-900 h-[7vh] w-screen fixed bottom-0 sm:h-[100vh] sm:px-3 sm:fixed sm:left-0 sm:w-[5vw] flex justify-around z-[1234] items-center sm:flex sm:flex-col sm:justify-center sm:gap-20`}>
        
      <SidebarButton Icon={HomeIcon} title={'Home'}  />
      <SidebarButton Icon={TheatersSharpIcon} title={'Movies'}  />
      <SidebarButton Icon={LiveTvSharpIcon} title={'Shows'}  />
      <SidebarButton Icon={PlaylistAddIcon} title={'Watchlist'} />
      <SidebarButton Icon={PersonRoundedIcon} title={'Profile'}  />
      
    </div>
  );
};

export default Sidebar;
