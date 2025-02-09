// import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from '../compenents/NavBar';
// import Hero from '../compenents/Hero';

// const Landing = () => {
//   return (
//     <div className='flex flex-col m-0 p-0 overflow-x-hidden'>
//       <NavBar showAuthButtons={true} />
//       <Hero/>
//     </div>
//   );
// };

// export default Landing;

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../compenents/NavBar';
import Hero from '../compenents/Hero';
import { Footer } from '../compenents/Footer';

const Landing = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-full'>
        <NavBar showAuthButtons={true} />
        <Hero />
      </div>
      <Footer />
    </div>

  );
};

export default Landing;