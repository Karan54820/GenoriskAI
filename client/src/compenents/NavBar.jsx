import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DocLogo from '../assets/dna.png';

const NavBar = ({ showAuthButtons }) => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const isAuthenticated = !!localStorage.getItem('token');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='flex justify-between items-center w-full max-w-[1160px] py-4 px-4 mx-auto sticky top-0 bg-richblack-900 border-b-[0.01rem] border-richblack-700 mb-10 text-white z-50'>
            <div className="w-full flex justify-between items-center text-richblack-100 z-50">
                <div className="text-xl font-bold">
                    <Link to="/" className="no-underline">
                        <div className="flex justify-center items-center gap-1">
                            <img src={DocLogo} alt="" width={40} height={50} />
                            <p className="font-serif text-2xl text-white">GenoriskAI</p>
                        </div>
                    </Link>
                </div>

                <div className="hidden md:flex flex-grow justify-center gap-4">
                    {isAuthenticated && (
                        <Link to="/" className="no-underline hover:text-blue-500">
                            Home
                        </Link>
                    )}
                    <Link to="/work" className="no-underline hover:text-blue-500">
                        Work
                    </Link>
                    <Link to="/about" className="no-underline hover:text-blue-500">
                        About
                    </Link>
                    <Link to="/contact" className="no-underline hover:text-blue-500">
                        Contact Us
                    </Link>
                </div>

                <div className="hidden md:flex gap-4">
                    {showAuthButtons && !isAuthenticated && (
                        <>
                            <Link to="/login" className='bg-richblack-800 text-richblack-100 py-[8px] rounded-[8px] border border-richblack-700 px-[12px]'>
                                Sign in
                            </Link>
                            <Link to="/register" className='bg-richblack-800 text-richblack-100 py-[8px] rounded-[8px] border border-richblack-700 px-[12px]'>
                                Create Account
                            </Link>
                        </>
                    )}
                    {isAuthenticated && (
                        <button
                            onClick={handleLogout}
                            className='bg-richblack-800 text-richblack-100 py-[8px] rounded-[8px] border border-richblack-700 px-[12px]'
                        >
                            Logout
                        </button>
                    )}
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden w-full bg-richblack-800 fixed top-0 left-0 h-screen z-50">
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-4 py-4 text-white">
                        {isAuthenticated && (
                            <Link to="/" className="text-white no-underline hover:text-blue-500" onClick={toggleMobileMenu}>
                                Home
                            </Link>
                        )}
                        <Link to="/work" className="no-underline hover:text-blue-500" onClick={toggleMobileMenu}>
                            Work
                        </Link>
                        <Link to="/about" className="no-underline hover:text-blue-500" onClick={toggleMobileMenu}>
                            About
                        </Link>
                        <Link to="/contact" className="no-underline hover:text-blue-500" onClick={toggleMobileMenu}>
                            Contact Us
                        </Link>
                        {showAuthButtons && !isAuthenticated && (
                            <>
                                <Link to="/login" className="no-underline hover:text-blue-500" onClick={toggleMobileMenu}>
                                    Sign in
                                </Link>
                                <Link to="/register" className="no-underline hover:text-blue-500" onClick={toggleMobileMenu}>
                                    Create Account
                                </Link>
                            </>
                        )}
                        {isAuthenticated && (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    toggleMobileMenu();
                                }}
                                className='text-richblack-5 no-underline hover:text-blue-500 bg-transparent border-none cursor-pointer text-base p-0'
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;