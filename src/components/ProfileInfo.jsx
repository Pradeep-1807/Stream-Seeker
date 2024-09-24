import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import Loader from './Loader';
import femaleProfile from '../assets/images/femaleProfile.jpg';
import maleProfile from '../assets/images/maleProfile.jpg';
import profileForOthers from '../assets/images/profileForOthers.jpg';
import '../App.css';
import UserInfoContext from './context/UserInfoContext';

const ProfileInfo = () => {

    const {userInfo} = useContext(UserInfoContext);


    if (!userInfo){
        return(
            <div className='flex min-h-screen justify-center items-center gradient-background'>
                <Loader />
            </div>
        )
         
      }


    return (
        <>
            <div className='h-screen xl:h-[100vh] sm:w-[95vw] gradient-background sm:ml-[5vw] flex justify-center items-center overflow-y-hidden overflow-x-hidden'>
                <div className='w-[80%] md:w-[50%] lg:w-[30%] h-[80%] border-4 border-yellow-400 rounded-lg bg-white'>
                    <div className='gradient-background h-[35%] rounded-b-[70%] flex flex-col justify-start items-center gap-2'>
                        <div className='h-[120px] w-[120px] bg-white rounded-[50%] mt-5'>
                            <img src={(userInfo?.gender === 'Male' && maleProfile) || (userInfo?.gender === 'Female' && femaleProfile ) || (profileForOthers)} alt="" className='h-full w-full rounded-[50%]' />
                        </div>
                        <h3 className='font-cutive text-sm lg:text-lg text-white'>{userInfo?.fname.charAt(0).toUpperCase() + userInfo?.fname.slice(1)}</h3>
                    </div>
                    <div className='flex flex-col m-auto w-full lg:w-[100%] p-7 gap-5 lg:p-10 text-[14px] sm:text-base'>
                        <div className='flex justify-start gap-8 md:gap-10 lg:gap-24'>
                            <div>
                                <h3>First Name</h3>
                                <h3 className='text-gray-500'>{userInfo?.fname.charAt(0).toUpperCase() + userInfo?.fname.slice(1)}</h3>
                            </div>
                            <div>
                                <h3>Last Name</h3>
                                <h3 className='text-gray-500'>{userInfo?.lname}</h3>
                            </div>
                        </div>
                        <div>
                            <h3>Gender</h3>
                            <h3 className='text-gray-500'>{userInfo?.gender}</h3>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <h3 className='text-[12px] md:text-base text-gray-500'>{userInfo?.email}</h3>
                        </div>
                        <div>
                            <h3>Password</h3>
                            <h3 className='text-gray-500'>{userInfo?.password}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </>
    );
}

export default ProfileInfo;
