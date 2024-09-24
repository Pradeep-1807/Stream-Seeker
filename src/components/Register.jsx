import React from 'react'
import '../App.css'
import HomeBackground from '../assets/images/HomeBackground.jpg';
import MobileGadgets  from '../assets/images/MobileGadgets.jpg'
import Signup from './Registration/Signup';
import Header from './Registration/Header';


const Register = () => {

  

  return (
    <div className='h-screen  bg-cover bg-center flex flex-col items-center z-10' style={{backgroundImage:`url(${MobileGadgets})`}}>
      
      <Header />

      <Signup />

    </div>
  )
}

export default Register
