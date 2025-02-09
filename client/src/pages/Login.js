import React from 'react';
import { Form, Input, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import NavBar from '../compenents/NavBar';
import frameImage1 from '../assets/AI.png';
import { FcGoogle } from 'react-icons/fc';
import { Footer } from '../compenents/Footer';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const finishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post('/api/v1/users/login', values);
      dispatch(hideLoading());
  
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user)); // Store user details
        message.success('Login Successfully');
        navigate('/dashboard');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error('Something Went Wrong');
    }
  };
  

  const backButtonHandler = async () => {
    navigate(-1);
  }

  return (
    <div className="form-container ">
      <NavBar />
      <div className="bg-richblack-900 min-h-screen flex flex-col mx-auto items-center pt-4 w-full">

        <h1 className="text-richblack-5 text-4xl font-semibold">Login </h1>
        <div className='flex w-10/12 max-w-[1160px] justify-start mt-6'>
          <button onClick={backButtonHandler} className='bg-richblack-800 text-richblack-100 py-[5px] rounded-[8px] border border-richblack-700 px-[18px] '>
            Back
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-10/12 max-w-[1160px] py-12 mx-auto gap-x-20 gap-y-10 border-1 border-richblack-700 p-5 mt-10 rounded-lg ">
          <Form
            layout="vertical"
            onFinish={finishHandler}
            className="register-form w-full sm:w-11/12 sm:max-w-[50%] text-richblack-5"
          >
            <Form.Item
              label={
                <span className="text-[0.865rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Email<sup className="text-pink-200 ml-1">*</sup>
                </span>
              }
              name="email"
            >
              <Input
                type="email"
                required
                placeholder="Enter Your Email"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-[0.001rem] border-b-2 placeholder-gray-400 hover:bg-richblack-700 focus:bg-richblack-700"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-[0.865rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Password<sup className="text-pink-200 ml-1">*</sup>
                </span>
              }
              name="password"
            >
              <Input
                type="password"
                required
                placeholder="Enter Your Password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-[0.001rem] border-b-2 placeholder-gray-400 hover:bg-richblack-700 focus:bg-richblack-700"
              />
            </Form.Item>

            <div className="flex flex-col">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
              <Link to="/register" className="m-2 font-semibold text-richblack-200 text-[14px]">
                Not a user? Register here
              </Link>
            </div>

            <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 hover:border-richblack-200 transition-all duration-300">
              <FcGoogle />
              <p>Sign Up with Google</p>
            </button>
            {/* <GoogleLogin /> */}
          </Form>

          <div className="right-side relative w-full sm:w-11/12 sm:max-w-[450px] rounded-xl">
            <img
              src={frameImage1}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Login;


