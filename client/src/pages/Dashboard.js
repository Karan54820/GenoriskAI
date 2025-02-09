
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import NavBar from '../compenents/NavBar';
// import { Footer } from '../compenents/Footer';

// const Dashboard = () => {
//   const [userData, setUserData] = useState(null);

//   const fetchUserData = async () => {
//     try {
//       const res = await axios.post('/api/v1/users/fetchUserData', {}, {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem('token'),
//         },
//       });

//       if (res.data.success) {
//         setUserData(res.data.user); // Ensure backend returns user data inside `user`
//       } else {
//         console.error("Failed to fetch user data:", res.data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <div className='bg-richblack-900'>
//       <NavBar showAuthButtons={false} />
//       <div className="min-h-screen text-white ">


//         {/* <h1 className="font-extrabold text-3xl text-center my-6">User Dashboard</h1> */}
//         <h1 className="font-extrabold text-3xl text-center my-6 font-serif">
//           {userData && userData.name !== 'them' ? `Welcome ${userData.name.split(' ')[0]} !` : 'User Dashboard'}
//         </h1>

//         <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4">User Details</h2>

//           {userData ? (
//             <table className="w-full border-collapse border border-gray-900">
//               <thead>
//                 <tr className="bg-gray-900">
//                   <th className="border border-gray-600 p-2">Name</th>
//                   <th className="border border-gray-600 p-2">Email</th>
//                   <th className="border border-gray-600 p-2">Phone Number</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border border-gray-600 p-2">{userData.name}</td>
//                   <td className="border border-gray-600 p-2">{userData.email}</td>
//                   <td className="border border-gray-600 p-2">{userData.phoneNumber || "N/A"}</td>
//                 </tr>
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-center text-gray-400">Loading user details...</p>
//           )}
//         </div>

//       </div>
//       <Footer />
//     </div>

//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../compenents/NavBar';
import { Footer } from '../compenents/Footer';
import dna_gif from '../assets/DNA-animation-unscreen.gif'


const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const res = await axios.post('/api/v1/users/fetchUserData', {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        },
      });

      if (res.data.success) {
        setUserData(res.data.user); // Ensure backend returns user data inside `user`
      } else {
        console.error("Failed to fetch user data:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className='bg-richblack-900 min-h-screen text-white'>
      <NavBar showAuthButtons={false} />

      {/* User Welcome Message */}
      <div className='min-h-screen'>
        <div className='min-h-[450px]'>
          <h1 className="font-extrabold text-3xl text-center my-6 font-serif">
            {userData && userData.name !== 'them' ? `Welcome ${userData.name.split(' ')[0]} !` : 'User Dashboard'}
          </h1>

          <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>

            {userData ? (
              <table className="w-full border-collapse border border-gray-900">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="border border-gray-600 p-2">Name</th>
                    <th className="border border-gray-600 p-2">Email</th>
                    <th className="border border-gray-600 p-2">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-600 p-2">{userData.name}</td>
                    <td className="border border-gray-600 p-2">{userData.email}</td>
                    <td className="border border-gray-600 p-2">{userData.phoneNumber || "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-400">Loading user details...</p>
            )}
          </div>
        </div>

        <div className='flex justify-evenly mx-auto max-w-[1160px] items-center border-2 py-2 rounded-xl border-richblack-700'>
          <div className="flex gap-6 bg-richblack-700 h-[400px] w-1/2 justify-center items-center rounded-3xl">
            <button onClick={() => navigate('/diseaseprediction')} className="bg-blue-600 px-6 py-3 text-white font-semibold rounded-md h-16">
              Disease Prediction
            </button>

            <button onClick={() => navigate('/dietprediction')} className="bg-green-600 px-6 py-3 text-white font-semibold rounded-md h-16">
              Diet Prediction
            </button>
          </div>

          <div>
            <img src={dna_gif} 
            className='w-[280px] h-[500px]' ></img>
          </div>

        </div>
      </div>




      {/* Navigation Buttons
      <div className="flex justify-center gap-6 mt-6">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => navigate('/disease-prediction')}
        >
          Disease Prediction
        </button>
        
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => navigate('/diet-prediction')}
        >
          Diet Prediction
        </button>
      </div> */}

      <Footer />
    </div>
  );
};

export default Dashboard;
