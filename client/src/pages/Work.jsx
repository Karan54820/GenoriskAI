import React from 'react';
import NavBar from '../compenents/NavBar';
import { Footer } from '../compenents/Footer';

import { useNavigate } from 'react-router-dom';
const Work = () => {

  const navigate = useNavigate();

  const backButtonHandler = async () => {
    navigate(-1);
  }

  return (
    <div >
      <NavBar showAuthButtons={false} />

      <div className='flex flex-col mx-auto max-w-[1160px]'>
        <div className='flex w-10/12 max-w-[1160px] justify-start mt-6'>
          <button onClick={backButtonHandler} className='bg-richblack-800 text-richblack-100 py-[5px] rounded-[8px] border border-richblack-700 px-[18px] '>
            Back
          </button>
        </div>

        <div className='w-full min-h-screen flex flex-col items-center'>
          <h1 className='text-3xl text-richblack-5'>Under Mantainance</h1>
        </div>
      </div>



      <Footer />

    </div>
  );
};

export default Work;