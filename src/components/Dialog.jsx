import React, {  useEffect, useRef } from 'react';


// Dialog component
const Dialog = ({ isOpen, onClose, onConfirm }) => {
  const dialogRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);



  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full p-1 sm:p-2 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div ref={dialogRef} className="bg-white p-2 sm:p-4 rounded-md">
        <p className=" mb-2 sm:mb-4 text-sm sm:text-base ">Add to watchlist?</p>
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <button className="sm:px-2 sm:py-1 px-[4px] py-1 w-[75%] m-auto bg-blue-500 text-white rounded-md  text-[8px] sm:text-[12px] font-cutive" onClick={onConfirm}>
            OK
          </button>
          <button className="sm:px-2 sm:py-1 w-[90%] px-1 py-1 m-auto bg-blue-500 text-white rounded-md  text-[8px] sm:text-[12px] font-cutive" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;