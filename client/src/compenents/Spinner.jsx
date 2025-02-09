import React from 'react'


const Spinner = () => {
  return (
    <div className="d-flex justify-center spinner">
        <div className='spinner-border' role='status'>
            <span className='visually-hidden text-2xl font-black'>Loading...</span>
        </div>
    </div>
  );
}

export default Spinner
