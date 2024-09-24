import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Searchbar = () => {

    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    function handleChange(e){
        const {value} = e.target;
        setSearchText(value)
    }
    function hanldeSubmit(e){
        e.preventDefault()
        searchText && navigate(`/search/${searchText}`)
    }



    return (
        <div className='  w-[50%] flex justify-center  '>
            <div className=' bg-white px-1 sm:px-2  py-1 rounded-3xl w-auto flex items-center focus-within:border-[3px] focus-within:border-teal-500' >
                <div className='ml-0 sm:ml-2 cursor-pointer'>
                    <SearchSharpIcon /> 
                </div>
                
                <form action="" onSubmit={hanldeSubmit} >
                    <input 
                        value={searchText}
                        onChange={handleChange} 
                        type="text" 
                        placeholder='Search'
                        className='px-1 sm:px-2 sm:py-1 rounded-2xl w-[85px] sm:w-[150px] focus:outline-none'  />  
                </form>
            </div>  
            
        </div>
    )
}

export default Searchbar
