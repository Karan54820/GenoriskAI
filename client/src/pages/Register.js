import React from 'react'
import { Form, Input, message } from 'antd'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../redux/features/alertSlice'
import NavBar from '../compenents/NavBar'
import frameImage1 from '../assets/AI.png';
import { Footer } from '../compenents/Footer'

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const finishHandler = async (values) => {
        try {
            dispatch(showLoading())
            const res = await axios.post('/api/v1/users/register', values)
            dispatch(hideLoading());
            if (res.data.success) {
                message.success('Register Successfully')
                navigate('/login')
            }
            else {
                message.error(res.data.message)
            }
        }
        catch (error) {
            dispatch(hideLoading());
            console.log(error)
            message.error('Something Went Wrong')
        }
    }

    const backButtonHandler = async () => {
        navigate(-1);
    }

    return (
        <div className='form-container'>
            <NavBar />
            <div className="bg-richblack-900 min-h-screen flex flex-col mx-auto items-center pt-4 w-full">
                <h1 className="text-richblack-5 text-4xl font-semibold">Register  </h1>
                <div className='flex w-10/12 max-w-[1160px] justify-start mt-6'>
                    <button onClick={backButtonHandler} className='bg-richblack-800 text-richblack-100 py-[5px] rounded-[8px] border border-richblack-700 px-[18px] '>
                        Back
                    </button>
                </div>
                <div className="flex justify-between w-10/12 max-w-[1160px] py-12 mx-auto gap-x-20 gap-y-0 border-1 p-5 mt-10 rounded-lg border-richblack-200">
                    <Form layout='vertical' onFinish={finishHandler} className="register-form w-11/12 max-w-[50%] text-richblack-5">

                        {/* <h2>
                            Register Form
                        </h2> */}

                        <Form.Item name="name"
                            label={
                                <span className="text-[0.865rem] text-richblack-5 mb-1 leading-[1.375rem]">
                                    Name<sup className="text-pink-200 ml-1">*</sup>
                                </span>
                            }
                        >
                            <Input type='text' required
                                placeholder='Enter Your Name (eg. Joe)'
                                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-[0.001rem] border-b-2  placeholder-gray-400 hover:bg-richblack-700 focus:bg-richblack-700" />
                        </Form.Item>

                        <Form.Item label={
                            <span className="text-[0.865rem] text-richblack-5 mb-1 leading-[1.375rem]">
                                Email<sup className="text-pink-200 ml-1">*</sup>
                            </span>
                        }
                            name="email">
                            <Input type='email' required
                                placeholder='Enter Your Email (eg. Joe@example.com)'
                                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-[0.001rem] border-b-2  placeholder-gray-400 hover:bg-richblack-700 focus:bg-richblack-700" />
                        </Form.Item>

                        <Form.Item label={
                            <span className="text-[0.865rem] text-richblack-5 mb-1 leading-[1.375rem]">
                                Create Password<sup className="text-pink-200 ml-1">*</sup>
                            </span>
                        } name="password">
                            <Input type='password' required
                                placeholder='Enter Password'
                                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-[0.001rem] border-b-2  placeholder-gray-400 hover:bg-richblack-700 focus:bg-richblack-700" />
                        </Form.Item>

                        <div className="flex flex-col">
                            <button className='btn btn-primary' type='submit'>
                                Register
                            </button>
                            <Link to="/login" className="m-2 font-semibold text-richblack-200 text-[14px]">
                                Already User Login Here
                            </Link>
                        </div>



                    </Form>

                    <div className="right-side relative w-11/12 max-w-[450px] rounded-xl">
                        <img
                            src={frameImage1}
                            alt="Pattern"
                            width={558}
                            height={504}
                            loading="lazy"
                            className=""
                        />
                    </div>

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Register
