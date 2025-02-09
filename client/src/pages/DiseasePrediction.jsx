// import React, { useState } from 'react';
// import NavBar from '../compenents/NavBar';
// import { Footer } from '../compenents/Footer';
// import { useAsyncError, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const DiseasePrediction = () => {
//     const navigate = useNavigate();
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [results, setResults] = useState([]);
//     const [uploadProgress, setUploadProgress] = useState(0);
//     const [showDietButton, setShowDietButton] = useState(false);
//     const [dietResults, setDietResults] = useState([]);
//     const [diet, setDiet] = useState(null);


//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//             setUploadProgress(0);
//         }
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) {
//             alert("Please select a file first!");
//             return;
//         }

//         setLoading(true);
//         const formData = new FormData();
//         formData.append("file", selectedFile);

//         try {
//             const response = await axios.post("http://127.0.0.1:5000/api/upload-disease", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//                 onUploadProgress: (progressEvent) => {
//                     const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//                     setUploadProgress(percent);
//                 },
//             });

//             if (response.data.success) {
//                 setResults(response.data.results);
//                 setShowDietButton(true);
//             } else {
//                 alert("Error: " + response.data.message);
//             }
//         } catch (error) {
//             console.error("Upload Error:", error);
//             alert("Server Error! Check Console.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // const handleShowDiet = async () => {
//     //     try {
//     //         const response = await axios.post("http://127.0.0.1:5000/api/get-diet", { results });
//     //         if (response.data.success) {
//     //             setDietResults(response.data.diet);
//     //         } else {
//     //             alert("Error fetching diet: " + response.data.message);
//     //         }
//     //     } catch (error) {
//     //         console.error("Diet Fetch Error:", error);
//     //         alert("Server Error! Check Console.");
//     //     }
//     // };



//     // const handleShowDiet = async () => {
//     //     try {
//     //         const response = await axios.post(
//     //             "http://127.0.0.1:5000/api/get-diet",
//     //             { diseases: results }, // Send results in JSON format
//     //             {
//     //                 headers: {
//     //                     "Content-Type": "application/json"
//     //                 }
//     //             }
//     //         );

//     //         setDiet(response.data); // Assuming the response has "diet"
//     //     } catch (error) {
//     //         console.error("Diet Fetch Error:", error);
//     //         alert("Error fetching diet. Check console.");
//     //     }
//     // };


//     const handleShowDiet = async () => {
//         try {
//             const response = await axios.post(
//                 "http://127.0.0.1:5000/api/get-diet",
//                 { diseases: results }, // Ensure results are correctly passed
//                 { headers: { "Content-Type": "application/json" } }
//             );

//             console.log("Diet Response:", response.data); // ✅ Log response in console

//             setDiet(response.data); // ✅ Store diet response in state
//         } catch (error) {
//             console.error("Diet Fetch Error:", error);
//             alert("Error fetching diet. Check console.");
//         }
//     };





//     return (
//         <div>
//             <NavBar />
//             <div className='flex flex-col justify-center items-center bg-richblack-900'>
//                 <div className='min-h-screen bg-richblack-900 text-white flex flex-col items-center p-6 w-[40%] min-w-[300px]'>
//                     <h1 className='text-3xl font-bold mb-6'>Disease Prediction</h1>

//                     <div className="w-full max-w-lg p-6 bg-gray-800 rounded-xl shadow-lg text-center">
//                         <label
//                             htmlFor="fileUpload"
//                             className="w-full h-40 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition"
//                         >
//                             <p className="text-lg font-semibold">Drag CSV here</p>
//                             <p className="text-sm text-gray-400">or, click to browse (200 MB max)</p>
//                             <input
//                                 id="fileUpload"
//                                 type="file"
//                                 accept=".vcf"
//                                 className="hidden"
//                                 onChange={handleFileChange}
//                             />
//                         </label>
//                     </div>

//                     {selectedFile && (
//                         <div className="mt-4">
//                             <p className="text-sm font-medium">{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</p>
//                             <div className="relative w-full h-2 mt-2 bg-gray-600 rounded-full">
//                                 <div className="absolute h-full bg-purple-500 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
//                             </div>
//                             <p className="text-sm mt-1">{uploadProgress}%</p>
//                         </div>
//                     )}

//                     <button
//                         onClick={handleUpload}
//                         className={`mt-6 px-6 py-3 text-white font-semibold rounded-md transition ${selectedFile ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500 cursor-not-allowed"}`}
//                         disabled={!selectedFile || loading}
//                     >
//                         {loading ? "Processing..." : "Upload & Predict"}
//                     </button>


//                     {diet && (
//                         <div className="w-full mt-10 p-6 bg-gray-800 rounded-xl shadow-lg text-center">
//                             <h2 className="text-2xl font-bold mb-4">Diet Recommendation</h2>
//                             <p className="text-lg font-semibold">{diet.diet}</p>
//                             <ul className="mt-4 list-disc list-inside">
//                                 {diet.foods.map((food, index) => (
//                                     <li key={index} className="text-white">{food}</li>
//                                 ))}
//                             </ul>
//                             <p className="mt-4 text-gray-400">{diet.guidelines}</p>
//                         </div>
//                     )}


//                     {results.length > 0 && (
//                         <div className='w-full mt-10 border-collapse border-[1px] p-10 rounded-xl border-richblack-700'>
//                             <h2 className="text-2xl font-bold mb-4">Prediction Results</h2>
//                             <table className="w-full text-center">
//                                 <thead>
//                                     <tr className="border-[1px] bg-richblack-800">
//                                         <th className="border border-richblack-700 p-2">Disease Name</th>
//                                         <th className="border border-gray-600 p-2">Risk Probability</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {results.map((disease, index) => (
//                                         <tr key={index} className="bg-gray-700">
//                                             <td className="border border-gray-600 p-2">{disease.disease_name}</td>
//                                             <td className="border border-gray-600 p-2">{(disease.risk_probability * 100).toFixed(2)}%</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )}

//                     {showDietButton && (
//                         <button
//                             onClick={handleShowDiet}
//                             className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
//                         >
//                             Show Diet Recommendations
//                         </button>
//                     )}

//                     {dietResults.length > 0 && (
//                         <div className='w-full mt-10 border-collapse border-[1px] p-10 rounded-xl border-richblack-700'>
//                             <h2 className="text-2xl font-bold mb-4">Diet Recommendations</h2>
//                             <ul className="list-disc pl-5">
//                                 {dietResults.map((diet, index) => (
//                                     <li key={index} className="text-gray-300">{diet}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default DiseasePrediction;


// ----------------------------------------------------

// import React, { useState } from 'react';
// import NavBar from '../compenents/NavBar';
// import { Footer } from '../compenents/Footer';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const DiseasePrediction = () => {
//     const navigate = useNavigate();
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [results, setResults] = useState([]);
//     const [uploadProgress, setUploadProgress] = useState(0);
//     const [showDietButton, setShowDietButton] = useState(false);
//     const [dietLoading, setDietLoading] = useState(false);
//     const [dietRecommendations, setDietRecommendations] = useState(null);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//             setUploadProgress(0);
//         }
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) {
//             alert("Please select a file first!");
//             return;
//         }

//         setLoading(true);
//         const formData = new FormData();
//         formData.append("file", selectedFile);

//         try {
//             const response = await axios.post("http://127.0.0.1:5000/api/upload-disease", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//                 onUploadProgress: (progressEvent) => {
//                     const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//                     setUploadProgress(percent);
//                 },
//             });

//             if (response.data.success) {
//                 setResults(response.data.results);
//                 setShowDietButton(true);
//             } else {
//                 alert("Error: " + response.data.message);
//             }
//         } catch (error) {
//             console.error("Upload Error:", error);
//             alert("Server Error! Check Console.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const fetchDietRecommendations = async () => {
//         setDietLoading(true);
//         try {
//             const response = await axios.post("http://127.0.0.1:5000/api/get-diet", {
//                 diseases: results.map(d => d.disease_name),
//             });

//             if (response.data.success) {
//                 setDietRecommendations(response.data.diet);
//             } else {
//                 alert("Error: " + response.data.message);
//             }
//         } catch (error) {
//             console.error("Diet Fetch Error:", error);
//             alert("Server Error! Check Console.");
//         } finally {
//             setDietLoading(false);
//         }
//     };

//     return (
//         <div>
//             <NavBar />
//             <div className='flex flex-col justify-center items-center bg-richblack-900'>
//                 <div className='flex w-10/12 max-w-[1160px] justify-start mt-6'>
//                     <button onClick={() => navigate(-1)} className='bg-richblack-800 text-richblack-100 py-[5px] rounded-[8px] border border-richblack-700 px-[18px]'>
//                         Back
//                     </button>
//                 </div>

//                 <div className='min-h-screen bg-richblack-900 text-white flex flex-col items-center p-6 w-[40%] min-w-[300px]'>
//                     <h1 className='text-3xl font-bold mb-6'>Disease Prediction</h1>

//                     <div className="w-full max-w-lg p-6 bg-gray-800 rounded-xl shadow-lg text-center">
//                         <div>
//                             <label
//                                 htmlFor="fileUpload"
//                                 className="w-full h-40 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition"
//                             >
//                                 <p className="text-lg font-semibold">Drag CSV here</p>
//                                 <p className="text-sm text-gray-400">or, click to browse (200 MB max)</p>
//                                 <input
//                                     id="fileUpload"
//                                     type="file"
//                                     accept=".vcf"
//                                     className="hidden"
//                                     onChange={handleFileChange}
//                                 />
//                             </label>
//                         </div>

//                         {selectedFile && (
//                             <div className="mt-4">
//                                 <div className="text-sm font-medium">{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</div>
//                                 <div className="relative w-full h-2 mt-2 bg-gray-600 rounded-full">
//                                     <div className="absolute h-full bg-purple-500 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
//                                 </div>
//                                 <p className="text-sm mt-1">{uploadProgress}%</p>
//                             </div>
//                         )}
//                     </div>

//                     <button
//                         onClick={handleUpload}
//                         className={`mt-6 px-6 py-3 text-white font-semibold rounded-md transition ${selectedFile ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500 cursor-not-allowed"}`}
//                         disabled={!selectedFile || loading}
//                     >
//                         {loading ? "Processing..." : "Upload & Predict"}
//                     </button>

//                     {results.length > 0 && (
//                         <div className='w-full mt-10 border-collapse border-[1px] p-10 rounded-xl border-richblack-700'>
//                             <h2 className="text-2xl font-bold mb-4">Predicted Diseases</h2>
//                             <table className="w-full text-center">
//                                 <thead>
//                                     <tr className="border-[1px] bg-richblack-800">
//                                         <th className="border border-richblack-700 p-2">Disease Code</th>
//                                         <th className="border border-gray-600 p-2">Disease Name</th>
//                                         <th className="border border-gray-600 p-2">Risk Probability</th>
//                                         <th className="border border-gray-600 p-2">Risk Category</th>
//                                         <th className="border border-gray-600 p-2">Matched SNPs</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {results.map((disease, index) => (
//                                         <tr key={index} className="bg-gray-700">
//                                             <td className="border border-gray-600 p-2">{disease.disease_code}</td>
//                                             <td className="border border-gray-600 p-2">{disease.disease_name}</td>
//                                             <td className="border border-gray-600 p-2">{(disease.risk_probability * 100).toFixed(2)}%</td>
//                                             <td className="border border-gray-600 p-2">{disease.risk_category}</td>
//                                             <td className="border border-gray-600 p-2">{disease.matched_snps}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )}

//                     {showDietButton && (
//                         <button
//                             onClick={fetchDietRecommendations}
//                             className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
//                             disabled={dietLoading}
//                         >
//                             {dietLoading ? "Fetching Diet..." : "Show Diet Recommendations"}
//                         </button>
//                     )}

//                     {dietRecommendations && (
//                         <div className="w-full mt-6 bg-gray-800 p-6 rounded-xl shadow-lg">
//                             <h2 className="text-2xl font-bold mb-4">Diet Recommendations</h2>
//                             <p className="text-lg">{dietRecommendations}</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default DiseasePrediction;

// -----------------------------------------------------

// import React, { useState } from 'react';
// import NavBar from '../compenents/NavBar';
// import { Footer } from '../compenents/Footer';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const DiseasePrediction = () => {
//     const navigate = useNavigate();
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [results, setResults] = useState([]);
//     const [dietRecommendations, setDietRecommendations] = useState(null);
//     const [showDiet, setShowDiet] = useState(false);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//         }
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) {
//             alert("Please select a file first!");
//             return;
//         }

//         setLoading(true);
//         const formData = new FormData();
//         formData.append("file", selectedFile);

//         try {
//             const response = await axios.post("http://127.0.0.1:5000/api/upload-disease", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });

//             if (response.data.success) {
//                 setResults(response.data.results.slice(0, 1)); // Display only the first disease initially
//                 setDietRecommendations(response.data.diet_recommendations);
//             } else {
//                 alert("Error: " + response.data.message);
//             }
//         } catch (error) {
//             console.error("Upload Error:", error);
//             alert("Server Error! Check Console.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <NavBar />
//             <div className='flex flex-col justify-center items-center bg-richblack-900'>
//                 <div className='min-h-screen bg-richblack-900 text-white flex flex-col items-center p-6 w-[40%] min-w-[300px]'>
//                     <h1 className='text-3xl font-bold mb-6'>Disease Prediction</h1>
//                     <input type="file" accept=".vcf" onChange={handleFileChange} />
//                     <button onClick={handleUpload} disabled={!selectedFile || loading}>
//                         {loading ? "Processing..." : "Upload & Predict"}
//                     </button>
//                     {results.length > 0 && (
//                         <div>
//                             <h2>{results[0].disease_name}</h2>
//                             <p>Risk Probability: {(results[0].risk_probability * 100).toFixed(2)}%</p>
//                             {!showDiet && (
//                                 <button onClick={() => setShowDiet(true)}>Show Diet</button>
//                             )}
//                             {showDiet && <p>{dietRecommendations}</p>}
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default DiseasePrediction;


//-----------------

// import React, { useState } from 'react';
// import NavBar from '../compenents/NavBar';
// import { Footer } from '../compenents/Footer';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const DiseasePrediction = () => {
//     const navigate = useNavigate();
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [results, setResults] = useState([]);
//     const [uploadProgress, setUploadProgress] = useState(0);
//     const [showDietButton, setShowDietButton] = useState(false);
//     const [dietRecommendations, setDietRecommendations] = useState(null);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//             setUploadProgress(0);
//         }
//     };

//     // const handleUpload = async () => {
//     //     if (!selectedFile) {
//     //         alert("Please select a file first!");
//     //         return;
//     //     }

//     //     setLoading(true);
//     //     const formData = new FormData();
//     //     formData.append("file", selectedFile);

//     //     try {
//     //         const response = await axios.post("http://127.0.0.1:5000/api/upload-disease", formData, {
//     //             headers: { "Content-Type": "multipart/form-data" },
//     //             onUploadProgress: (progressEvent) => {
//     //                 const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//     //                 setUploadProgress(percent);
//     //             },
//     //         });

//     //         if (response.data.success) {
//     //             setResults(response.data.results);
//     //             setShowDietButton(true);
//     //         } else {
//     //             alert("Error: " + response.data.message);
//     //         }
//     //     } catch (error) {
//     //         console.error("Upload Error:", error);
//     //         alert("Server Error! Check Console.");
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };


//     const handleUpload = async () => {
//         if (!selectedFile) {
//             alert("Please select a file first!");
//             return;
//         }

//         setLoading(true);
//         const formData = new FormData();
//         formData.append("file", selectedFile);

//         try {
//             const response = await axios.post("http://127.0.0.1:5000/api/upload-disease", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//                 onUploadProgress: (progressEvent) => {
//                     const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//                     setUploadProgress(percent);
//                 },
//             });

//             if (response.data.success) {
//                 setResults(response.data.results);
//                 setDietRecommendations(response.data.diet_recommendations); // Store diet recommendations
//                 setShowDietButton(true);
//             } else {
//                 alert("Error: " + response.data.message);
//             }
//         } catch (error) {
//             console.error("Upload Error:", error);
//             alert("Server Error! Check Console.");
//         } finally {
//             setLoading(false);
//         }
//     };



//     return (
//         <div>
//             <NavBar />
//             <div className='flex flex-col justify-center items-center bg-richblack-900'>
//                 <div className='flex w-10/12 max-w-[1160px] justify-start mt-6'>
//                     <button onClick={() => navigate(-1)} className='bg-richblack-800 text-richblack-100 py-[5px] rounded-[8px] border border-richblack-700 px-[18px]'>
//                         Back
//                     </button>
//                 </div>
//                 <div className='min-h-screen bg-richblack-900 text-white flex flex-col items-center p-6 w-[40%] min-w-[300px]'>
//                     <h1 className='text-3xl font-bold mb-6'>Disease Prediction</h1>
//                     <div className="w-full max-w-lg p-6 bg-gray-800 rounded-xl shadow-lg text-center">
//                         <label htmlFor="fileUpload" className="w-full h-40 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition">
//                             <p className="text-lg font-semibold">Drag CSV here</p>
//                             <p className="text-sm text-gray-400">or, click to browse (200 MB max)</p>
//                             <input id="fileUpload" type="file" accept=".vcf" className="hidden" onChange={handleFileChange} />
//                         </label>
//                         {selectedFile && (
//                             <div className="mt-4">
//                                 <div className="text-sm font-medium">{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</div>
//                                 <div className="relative w-full h-2 mt-2 bg-gray-600 rounded-full">
//                                     <div className="absolute h-full bg-purple-500 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
//                                 </div>
//                                 <p className="text-sm mt-1">{uploadProgress}%</p>
//                             </div>
//                         )}
//                     </div>
//                     <button onClick={handleUpload} className={`mt-6 px-6 py-3 text-white font-semibold rounded-md transition ${selectedFile ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500 cursor-not-allowed"}`} disabled={!selectedFile || loading}>
//                         {loading ? "Processing..." : "Upload & Predict"}
//                     </button>
//                     {results.length > 0 && (
//                         <div className='w-full mt-10 p-6 bg-gray-800 rounded-xl shadow-lg'>
//                             <h2 className='text-xl font-bold mb-4'>Predicted Diseases</h2>
//                             <table className="w-full border-collapse border border-gray-600">
//                                 <thead>
//                                     <tr className="bg-richblack-800 text-white">
//                                         <th className="border border-gray-600 p-2">Disease Code</th>
//                                         <th className="border border-gray-600 p-2">Disease Name</th>
//                                         <th className="border border-gray-600 p-2">Risk Probability</th>
//                                         <th className="border border-gray-600 p-2">Risk Category</th>
//                                         <th className="border border-gray-600 p-2">Matched SNPs</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {results.map((disease, index) => (
//                                         <tr key={index} className="bg-gray-700 text-white">
//                                             <td className="border border-gray-600 p-2">{disease.disease_code}</td>
//                                             <td className="border border-gray-600 p-2">{disease.disease_name}</td>
//                                             <td className="border border-gray-600 p-2">{(disease.risk_probability * 100).toFixed(2)}%</td>
//                                             <td className="border border-gray-600 p-2">{disease.risk_category}</td>
//                                             <td className="border border-gray-600 p-2">{disease.matched_snps}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>

//                             {showDietButton && (
//                                 <button onClick={() => setDietRecommendations(dietRecommendations)} className='mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition'>
//                                     Show Diet Recommendations
//                                 </button>
//                             )}


//                             {dietRecommendations && (
//                                 <div className='mt-6 p-4 bg-gray-700 rounded-xl'>
//                                     <h2 className='text-lg font-bold mb-2'>Diet Recommendations</h2>
//                                     <p>{dietRecommendations}</p>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default DiseasePrediction;


//----------------------


// import React, { useState } from 'react';
// import NavBar from '../compenents/NavBar';
// import { Footer } from '../compenents/Footer';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const DiseasePrediction = () => {
//     const navigate = useNavigate();
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [results, setResults] = useState([]);
//     const [uploadProgress, setUploadProgress] = useState(0);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//             setUploadProgress(0);

//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => {
//                 sessionStorage.setItem("uploadedFile", JSON.stringify(file));
//             };
//         }
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) {
//             alert("Please select a file first!");
//             return;
//         }

//         setLoading(true);
//         const formData = new FormData();
//         formData.append("file", selectedFile);

//         try {
//             const response = await axios.post("http://127.0.0.1:5000/api/upload-disease", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//                 onUploadProgress: (progressEvent) => {
//                     const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//                     setUploadProgress(percent);
//                 },
//             });

//             if (response.data.success) {
//                 setResults(response.data.results);
//             } else {
//                 alert("Error: " + response.data.message);
//             }
//         } catch (error) {
//             console.error("Upload Error:", error);
//             alert("Server Error! Check Console.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <NavBar />
//             <div className='flex flex-col justify-center items-center bg-richblack-900'>
//                 <div className='flex w-10/12 max-w-[1160px] justify-start mt-6'>
//                     <button onClick={() => navigate(-1)} className='bg-richblack-800 text-richblack-100 py-[5px] rounded-[8px] border border-richblack-700 px-[18px] '>
//                         Back
//                     </button>
//                 </div>

//                 <div className='min-h-screen bg-richblack-900 text-white flex flex-col items-center p-6 w-[40%] min-w-[300px]'>
//                     <h1 className='text-3xl font-bold mb-6'>Disease Prediction</h1>

//                     <div className="w-full max-w-lg p-6 bg-gray-800 rounded-xl shadow-lg text-center">
//                         <div>
//                             <label
//                                 htmlFor="fileUpload"
//                                 className="w-full h-40 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition"
//                             >
//                                 <p className="text-lg font-semibold">Drag CSV here</p>
//                                 <p className="text-sm text-gray-400">or, click to browse (200 MB max)</p>
//                                 <input
//                                     id="fileUpload"
//                                     type="file"
//                                     accept=".vcf"
//                                     className="hidden"
//                                     onChange={handleFileChange}
//                                 />
//                             </label>
//                         </div>

//                         {selectedFile && (
//                             <div className="mt-4">
//                                 <div className="text-sm font-medium">{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</div>
//                                 <div className="relative w-full h-2 mt-2 bg-gray-600 rounded-full">
//                                     <div className="absolute h-full bg-purple-500 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
//                                 </div>
//                                 <p className="text-sm mt-1">{uploadProgress}%</p>
//                             </div>
//                         )}
//                     </div>

//                     <button
//                         onClick={handleUpload}
//                         className={`mt-6 px-6 py-3 text-white font-semibold rounded-md transition ${selectedFile ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500 cursor-not-allowed"}`}
//                         disabled={!selectedFile || loading}
//                     >
//                         {loading ? "Processing..." : "Upload & Predict"}
//                     </button>

//                     {results.length > 0 && (
//                         <div className='w-full mt-10 border-collapse border-[1px] p-10 rounded-xl border-richblack-700'>
//                             <table className="">
//                                 <thead>
//                                     <tr className="border-[1px] bg-richblack-800">
//                                         <th className="border border-richblack-700 p-2">Disease Code</th>
//                                         <th className="border border-gray-600 p-2">Disease Name</th>
//                                         <th className="border border-gray-600 p-2">Risk Probability</th>
//                                         <th className="border border-gray-600 p-2">Risk Category</th>
//                                         <th className="border border-gray-600 p-2">Matched SNPs</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {results.map((disease, index) => (
//                                         <tr key={index} className="bg-gray-700">
//                                             <td className="border border-gray-600 p-2">{disease.disease_code}</td>
//                                             <td className="border border-gray-600 p-2">{disease.disease_name}</td>
//                                             <td className="border border-gray-600 p-2">{(disease.risk_probability * 100).toFixed(2)}%</td>
//                                             <td className="border border-gray-600 p-2">{disease.risk_category}</td>
//                                             <td className="border border-gray-600 p-2">{disease.matched_snps}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default DiseasePrediction;


// -----------------------------------


import React, { useState } from 'react';
import NavBar from '../compenents/NavBar';
import { Footer } from '../compenents/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DiseasePrediction = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [dietRecommendations, setDietRecommendations] = useState(null);
    const [showDiet, setShowDiet] = useState(false);  // State to toggle diet recommendations

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setUploadProgress(0);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first!");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("http://127.0.0.1:5000/api/upload-disease", formData, {
                headers: { "Content-Type": "multipart/form-data" },
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percent);
                },
            });

            if (response.data.success) {
                setResults(response.data.results);
                setDietRecommendations(response.data.diet_recommendations);  // Store diet recommendations
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Upload Error:", error);
            alert("Server Error! Check Console.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavBar />
            <div className='flex flex-col justify-center items-center bg-richblack-900'>
                <div className='flex w-10/12 max-w-[1160px] justify-start mt-6'>
                    <button onClick={() => navigate(-1)} className='bg-richblack-800 text-richblack-100 py-[5px] rounded-[8px] border border-richblack-700 px-[18px] '>
                        Back
                    </button>
                </div>

                <div className='min-h-screen bg-richblack-900 text-white flex flex-col items-center p-6 w-[40%] min-w-[300px]'>
                    <h1 className='text-3xl font-bold mb-6'>Disease Prediction</h1>

                    <div className="w-full max-w-lg p-6 bg-gray-800 rounded-xl shadow-lg text-center">
                        <div>
                            <label
                                htmlFor="fileUpload"
                                className="w-full h-40 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition"
                            >
                                <p className="text-lg font-semibold">Drag VCF here</p>
                                <p className="text-sm text-gray-400">or, click to browse (200 MB max)</p>
                                <input
                                    id="fileUpload"
                                    type="file"
                                    accept=".vcf"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>


                        {selectedFile && (
                            <div className="mt-4">
                                <div className="text-sm font-medium">{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</div>
                                <div className="relative w-full h-2 mt-2 bg-gray-600 rounded-full">
                                    <div className="absolute h-full bg-purple-500 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
                                </div>
                                <p className="text-sm mt-1">{uploadProgress}%</p>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleUpload}
                        className={`mt-6 px-6 py-3 text-white font-semibold rounded-md transition ${selectedFile ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500 cursor-not-allowed"}`}
                        disabled={!selectedFile || loading}
                    >
                        {loading ? "Processing..." : "Upload & Predict"}
                    </button>

                    {results.length > 0 && (
                        <div className='w-full mt-10 border-collapse border-[1px] p-10 rounded-xl border-richblack-700'>
                            <table className="">
                                <thead>
                                    <tr className="border-[1px] bg-richblack-800">
                                        <th className="border border-richblack-700 p-2">Disease Code</th>
                                        <th className="border border-gray-600 p-2">Disease Name</th>
                                        <th className="border border-gray-600 p-2">Risk Probability</th>
                                        <th className="border border-gray-600 p-2">Risk Category</th>
                                        <th className="border border-gray-600 p-2">Matched SNPs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((disease, index) => (
                                        <tr key={index} className="bg-gray-700">
                                            <td className="border border-gray-600 p-2">{disease.disease_code}</td>
                                            <td className="border border-gray-600 p-2">{disease.disease_name}</td>
                                            <td className="border border-gray-600 p-2">{(disease.risk_probability * 100).toFixed(2)}%</td>
                                            <td className="border border-gray-600 p-2">{disease.risk_category}</td>
                                            <td className="border border-gray-600 p-2">{disease.matched_snps}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Button to Show Diet Recommendations */}
                            <button
                                onClick={() => setShowDiet(true)}
                                className="mt-4 px-6 py-3 text-white font-semibold rounded-md bg-green-600 hover:bg-green-700 transition"
                            >
                                View Diet Recommendations
                            </button>
                        </div>
                    )}

                    {/* Show Diet Recommendations if the user clicks the button */}
                    {showDiet && dietRecommendations && (
                        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg w-[1000px]  max-w-[1160px] text-center">
                            {/* <h2 className="text-2xl font-bold mb-4">Diet Recommendations</h2> */}
                            {/* <p className="text-gray-300 whitespace-pre-line">{dietRecommendations}</p> */}
                            <div className="mt-6 p-6 bg-richblack-800 rounded-lg shadow-lg  flex flex-col text-left items-center justify-center">
                                <h2 className="text-3xl font-bold mb-4 text-center">Diet Recommendations</h2>
                                <div className="text-gray-300">
                                    {dietRecommendations.split("\n").map((line, index) => {
                                        if (line.trim() === "") return null; // Skip empty lines

                                        if (line.includes("**")) {
                                            // Convert Markdown-style bold (**Text**) to proper HTML <strong>
                                            const formattedText = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
                                            return <p key={index} className="mt-2" dangerouslySetInnerHTML={{ __html: formattedText }} />;
                                        } else if (line.includes(":")) {
                                            // Heading-like structure (disease name or section title)
                                            return <h3 key={index} className="text-xl font-semibold mt-4">{line}</h3>;
                                        } else if (line.startsWith("-")) {
                                            // Bullet points for food recommendations
                                            return <li key={index} className="list-disc ml-6">{line.substring(1)}</li>;
                                        } else {
                                            // Regular paragraph text
                                            return <p key={index} className="mt-1 ">{line}</p>;
                                        }
                                    })}
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DiseasePrediction;

