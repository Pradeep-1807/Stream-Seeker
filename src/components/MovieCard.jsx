import React, { useState, useEffect, useRef } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import UserInfoContext from './context/UserInfoContext';
import { Link } from 'react-router-dom';
import Dialog from './Dialog';


const MovieCard = ({ currentMovie, cardHeight, cardWidth, maxHeight, maxWidth, display, deleteDisplay }) => {
  const { watchlist, setWatchlist } = useContext(UserInfoContext);
  const [isDisplay, setIsDisplay] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState('');
  const cardRef = useRef(null);


  const addToWatchlist = () => {
    setShowDialog(true);
  };

  const deleteFromWatchlist =()=>{
    setWatchlist(watchlist.filter((movie)=>(movie._id != currentMovie._id)))
  }



  const handleConfirmAdd = () => {
    if (watchlist && watchlist.some(movie => movie._id === currentMovie._id)) {
      setMessage('Content is already in the watchlist.');
    } 
    else {
      if (watchlist) {
        setWatchlist([currentMovie, ...watchlist]);
      } else {
        setWatchlist([currentMovie]);
      }
      setMessage('Content added to the watchlist.');
    }

    setIsDisplay('hidden');
    setShowDialog(false);
  };



  const handleCloseDialog = () => {
    setShowDialog(false);
  };



  useEffect(() => {
    const handleMouseOut = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.relatedTarget)) {
        handleCloseDialog();
      }
    };

    if (showDialog) {
      cardRef.current.addEventListener('mouseleave', handleMouseOut);
    }
    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mouseleave', handleMouseOut);
      }
    };
  }, [showDialog]);



  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);



  return (
    <div ref={cardRef} className={`relative flex flex-col gap-1 overflow-y-hidden hover:z-40 ${cardHeight} ${cardWidth} ${maxHeight} ${maxWidth} hover:scale-110 border-[4px] border-hidden rounded-md hover:border-solid hover:border-yellow-500 transition-all duration-300`}>
      <Link to={`/${currentMovie.contentType}/${currentMovie._id}`}>
        <img src={currentMovie.poster_path} alt="" className="inline w-full rounded-md h-full" />
      </Link>

      <div className={`bg-white absolute top-0 right-0 p-1 flex items-center justify-center z-50 rounded-bl-[12px] ${display || isDisplay}`}>
        <button className={`flex items-center border-2 border-blue-950 p-[2px] bg-white text-blue-950 rounded-[30%]`} onClick={addToWatchlist}>
          <AddBoxIcon sx={{ fontSize: { xs: '12px', sm: '20px' } }} />
        </button>
      </div>

      <div className={`bg-white absolute bottom-0 right-0 p-1 flex items-center justify-center z-50 rounded-tl-[12px] ${deleteDisplay || 'hidden'}`}>
        <button className={`flex items-center border-2 border-red-500 p-[2px] bg-white text-blue-950 rounded-[30%]`} onClick={deleteFromWatchlist}>
            < DeleteIcon sx={{color:'red', fontSize: { xs: '12px', sm: '20px' } }} />
        </button>
      </div>

      <Dialog isOpen={showDialog} onClose={handleCloseDialog} onConfirm={handleConfirmAdd} />
      {message && (
        <div className="absolute bottom-0 left-0 w-full h-auto bg-blue-500 text-white text-[12px] sm:text-base text-center p-2 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
