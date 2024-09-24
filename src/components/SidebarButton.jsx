// SidebarButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarButton = ({ Icon, title}) => {



  return (
    <Link to={`/${title.toLowerCase()}`}  >
      <div className='cursor-pointer ' >
        <button className={` group text-yellow-500 hover:text-white`}>
          <Icon  sx={{ fontSize: { xs: '20px', sm: '30px',transition: 'all 0.5s',':hover': {
          color: 'white'
        } } }} className='group ' />
          <h4 className={`text-[10px] sm:text-[14px] text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5s]`}>{title}</h4>
        </button>
      </div>
    </Link>
  );
};

export default SidebarButton;
