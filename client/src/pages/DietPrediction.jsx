// import React, { useState } from 'react';
// // import NavBar from '../components/NavBar';
// import NavBar from '../compenents/NavBar';
// // import { Footer } from '../components/Footer';
// import { Footer } from '../compenents/Footer';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const DietPrediction = () => {
//     const navigate = useNavigate();
//     const [selectedDisease, setSelectedDisease] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [results, setResults] = useState(null);
//     const [error, setError] = useState(null);

//     const diseases = ["Anemia", "Diabetes Type 1", "Diabetes Type 2", "Hypertension", "Osteoporosis", "Obesity"];

//     const handlePredict = async () => {
//         if (!selectedDisease) {
//             alert("Please select a disease first!");
//             return;
//         }

//         setLoading(true);
//         setError(null);
//         setResults(null);

//         try {
//             const response = await axios.post('http://localhost:5000/predict-diet', 
//                 { disease: selectedDisease.toLowerCase() }, 
//                 { headers: { "Content-Type": "application/json" } }
//             );

//             if (response.data) {
//                 setResults(response.data);
//             } else {
//                 setError("No prediction results.");
//             }
//         } catch (err) {
//             setError("Failed to fetch predictions. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <NavBar />
//             <div className='flex flex-col items-center bg-richblack-900 min-h-screen py-6'>
//                 <button onClick={() => navigate(-1)} className='bg-richblack-800 text-white py-2 px-4 rounded-md'>
//                     Back
//                 </button>

//                 <h1 className='text-3xl font-bold mt-6 text-white'>Diet Prediction</h1>

//                 <select value={selectedDisease} onChange={(e) => setSelectedDisease(e.target.value)}
//                     className="mt-4 p-3 bg-gray-700 text-white rounded-md">
//                     <option value="">Select a disease</option>
//                     {diseases.map((d, index) => <option key={index} value={d}>{d}</option>)}
//                 </select>

//                 <button onClick={handlePredict} className="mt-4 bg-blue-600 px-6 py-3 text-white rounded-md">
//                     {loading ? "Processing..." : "Predict Diet"}
//                 </button>

//                 {results && (
//                     <div className="mt-6 bg-gray-800 text-white p-4 rounded-md w-3/4">
//                         <h2 className="text-xl font-semibold">Recommended Nutrients:</h2>
//                         <p>{results.recommended_nutrients.join(', ')}</p>

//                         <h2 className="text-xl font-semibold mt-4">Top Recipes:</h2>
//                         <ul>
//                             {results.top_recipes.map((recipe, index) => (
//                                 <li key={index} className="list-disc ml-6">{recipe}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 {error && <p className="text-red-500 mt-4">{error}</p>}
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default DietPrediction;

import React, { useState } from 'react';
import NavBar from '../compenents/NavBar';
import { Footer } from '../compenents/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DietPrediction = () => {
    const navigate = useNavigate();
    const [selectedDisease, setSelectedDisease] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const diseases = ["Anemia", "Diabetes Type 1", "Diabetes Type 2", "Hypertension", "Osteoporosis", "Obesity"];

    const handlePredict = async () => {
        if (!selectedDisease) {
            alert("Please select a disease first!");
            return;
        }

        setLoading(true);
        setError(null);
        setResults(null);

        try {
            const response = await axios.post('http://localhost:5000/predict-diet',
                { disease: selectedDisease.toLowerCase() },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.data) {
                setResults(response.data);
            } else {
                setError("No prediction results.");
            }
        } catch (err) {
            setError("Failed to fetch predictions. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavBar />
            <div className='flex flex-col items-center bg-richblack-900 min-h-screen py-6'>
                <button onClick={() => navigate(-1)} className='bg-richblack-800 text-white py-2 px-4 rounded-md'>
                    Back
                </button>

                <h1 className='text-3xl font-bold mt-6 text-white'>Diet Prediction</h1>

                <div className='flex flex-col px-32 py-24 border-2 mt-4 justify-center items-center text-richblack-25 rounded-2xl border-richblack-200 bg-richblack-700 '>
                    <h3 className='text-2xl'>Select Your Disease</h3>
                    
                    <select
                        value={selectedDisease}
                        onChange={(e) => setSelectedDisease(e.target.value)}
                        className="mt-4 p-3 w-96 bg-gray-800 text-white border-2 border-gray-500 rounded-lg shadow-md outline-none transition duration-300 ease-in-out hover:border-blue-400 focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" className="text-gray-400">Select a disease</option>
                        {diseases.map((d, index) => <option key={index} value={d}>{d}</option>)}
                    </select>
                </div>



                {/* Styled Button */}
                <button
                    onClick={handlePredict}
                    className="mt-4 px-6 py-3 w-96 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-blue-800 hover:scale-105 active:scale-95"
                >
                    {loading ? "Processing..." : "Predict Diet"}
                </button>

                {results && (
                    <div className="mt-6 bg-gray-800 text-white p-4 rounded-md w-3/4 shadow-md">
                        <h2 className="text-xl font-semibold">Recommended Nutrients:</h2>
                        <p>{results.recommended_nutrients.join(', ')}</p>

                        <h2 className="text-xl font-semibold mt-4">Top Recipes:</h2>
                        <ul>
                            {results.top_recipes.map((recipe, index) => (
                                <li key={index} className="list-disc ml-6">{recipe}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
            <Footer />
        </div>
    );
};

export default DietPrediction;
