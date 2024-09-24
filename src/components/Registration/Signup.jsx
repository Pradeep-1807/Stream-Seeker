import React, { useState, useContext } from 'react';
import InputComponent from './InputComponent';
import { useNavigate } from 'react-router-dom';
import UserInfoContext from '../context/UserInfoContext';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    gender: '' // Add gender to the initial state
  });

  const [genderError, setGenderError] = useState(false);

  const { setUserInfo: setUserContextInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

  function handleChange(name, value) {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  }

  function handleGenderChange(e) {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      gender: e.target.value,
    }));
    setGenderError(false); // Reset the gender error on change
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!userInfo.gender) {
      setGenderError(true); // Set gender error if not selected
      return;
    }
    // Setting the value of userInfo to Context
    setUserContextInfo(userInfo);
    navigate(`/home`);
  }

  return (
    <div className='flex flex-col items-center justify-center w-screen h-full shadow-lg'>
      <div className='h-auto w-[80%] sm:w-[50%] lg:w-[40%] bg-transparent border rounded-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col items-start gap-5 p-5 sm:p-12 text-white'>
          <InputComponent forValue='fname' type='text' value='First Name' inputName='fname' placeholder='First Name' getValue={handleChange} />
          <InputComponent forValue='lname' type='text' value='Last Name' inputName='lname' placeholder='Last Name' getValue={handleChange} />
          <div className={`w-full p-1.5 rounded-md bg-transparent border ${genderError ? 'border-red-500' : 'border'} outline-none focus:outline focus:outline-offset-1 focus:outline-pink-500 focus:border-none pl-3`}>
            <h4 className='mb-2'>Gender</h4>
            <div className='flex flex-wrap justify-start gap-2 sm:gap-5'>
              <div className='flex gap-1'>
                <input type="radio" id="Male" name="gender" value="Male" onChange={handleGenderChange} />
                <label htmlFor="Male">Male</label>
              </div>
              <div className='flex gap-1'>
                <input type="radio" id="Female" name="gender" value="Female" onChange={handleGenderChange} />
                <label htmlFor="Female">Female</label>
              </div>
              <div className='flex gap-1'>
                <input type="radio" id="Other" name="gender" value="Other" onChange={handleGenderChange} />
                <label htmlFor="Other">Other</label>
              </div>
            </div>
            {genderError && <p className='text-red-500 text-sm mt-2'>Gender is required</p>}
          </div>
          <InputComponent forValue='email' type='email' value='Email' inputName='email' placeholder='Email' getValue={handleChange} />
          <InputComponent forValue='password' type='password' value='Password' inputName='password' placeholder='Password' getValue={handleChange} />
          <div className='flex justify-center w-full transition-all duration-1000'>
            <button type='submit' className='outline outline-offset-1 outline-blue-500 py-2 px-3 rounded-md hover:bg-blue-500 hover:outline-none transition-all duration-300'>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
