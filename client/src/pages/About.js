import React from 'react';
import NavBar from '../compenents/NavBar';
import DnaCellImage from '../assets/image1.jpg';
import { Footer } from '../compenents/Footer';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const backButtonHandler = async () => {
    navigate(-1);
  }


  return (
    <div>
      <div className='w-full flex flex-col justify-center items-center mb-10'>
        <NavBar showAuthButtons={false} />
        <h1 className='text-4xl mb-6 text-richblack-5 font-semibold'>About Us</h1>
        <div className='flex w-10/12 max-w-[1160px] justify-start mt-6'>
          <button onClick={backButtonHandler} className='bg-richblack-800 text-richblack-100 py-[5px] rounded-[8px] border border-richblack-700 px-[18px] '>
            Back
          </button>
        </div>
        <div className='w-11/12 flex flex-col max-w-[1160px] justify-center mx-auto text-richblack-5 items-center'>



          {/* Parent container to align text and image side by side */}
          <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto  gap-x-20'>

            {/* Left Container - Text Section */}
            <div className='w-11/12 max-w-[500px]'>
              <div className='mb-3'>
                <h2 className='text-2xl font-semibold mb-2 w-full'>About Us</h2>
                <p className='text-richblack-25'>
                  At GenoriskAI, we believe that health is personal. Our mission is to revolutionize the way individuals understand their genetic makeup and make informed lifestyle choices. By leveraging cutting-edge genomic science, artificial intelligence, and nutritional research, we provide personalized health risk assessments and diet recommendations tailored to your unique DNA.
                </p>
              </div>

              <div className='mb-3'>
                <h2 className='text-2xl font-semibold mb-2'>Our Vision</h2>
                <p className='text-richblack-25'>
                  To empower individuals with actionable genetic insights that promote healthier lives and prevent potential health risks before they arise.
                </p>
              </div>

              <div className='mb-3'>
                <h2 className='text-2xl font-semibold mb-2'>Our Mission</h2>
                <p className='text-richblack-25'>
                  We aim to bridge the gap between genomics and everyday health by developing an easy-to-use, secure, and science-backed platform that offers:<br />
                  ✅ Accurate genetic risk predictions for various health conditions<br />
                  ✅ Personalized diet and lifestyle recommendations based on genetic predispositions<br />
                  ✅ A seamless and privacy-focused experience for users
                </p>
              </div>

            </div>

            {/* Right Container - Image Section */}
            <div className='relative w-11/12 max-w-[500px]'>
              <img
                src={DnaCellImage}
                alt="DNA Cell"
                width={557}
                height={504}
                loading='lazy'
                className='max-w-sm rounded-lg shadow-lg'
              />
            </div>

          </div>

          <div className='flex flex-col justify-between w-11/12 max-w-[1160px] mx-auto  gap-x-20 mb-3'>
            <h2 className='text-2xl font-semibold mb-2 w-full'>How It Works</h2>
            <p className='text-richblack-25'>Our platform analyzes genomic data from trusted sources and user submissions, using advanced machine learning models to predict potential health risks. We then generate customized dietary and lifestyle recommendations based on your genetic profile, helping you make informed decisions for a healthier future.
            </p>
          </div>

          <div className='flex flex-col justify-between w-11/12 max-w-[1160px] mx-auto  gap-x-20 mb-3'>
            <h2 className='text-2xl font-semibold mb-2 w-full'>Why Choose Us?</h2>
            <p className='text-richblack-25'>🔬 Science-Driven – Built on verified genomic research and AI-driven analytics.<br />🛡️ Privacy First – We implement stringent security protocols to protect your genetic data.<br />🌍 Holistic Approach – Our recommendations integrate genetics with practical lifestyle guidance.<br />🤝 Community & Support – We partner with healthcare professionals to provide expert-backed solutions.
            </p>
          </div>

          <div className='flex flex-col justify-between w-11/12 max-w-[1160px] mx-auto  gap-x-20 mb-3'>
            <h2 className='text-2xl font-semibold mb-2 w-full'>Join Us on the Journey to Personalized Health</h2>
            <p className='text-richblack-25'>Your DNA holds the key to a healthier life. With [Your Platform Name], you can unlock personalized insights and take proactive steps toward a better future. <br />
            </p>
            <span className='font-semibold text-xl mt-5'>Start your journey today!</span>
          </div>

        </div>
      </div>

      <Footer />
    </div>

  );
};

export default About;
