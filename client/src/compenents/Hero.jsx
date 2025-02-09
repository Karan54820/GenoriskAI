import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import "../index.css";
import dr_image from "../assets/dr_bg.png";
import image1 from "../assets/image1.jpg"

export default function Hero() {
    const typedRef = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        typedInstance.current = new Typed(typedRef.current, {
            strings: [
                "Gene Risk Prediction Platform",
                "Disease Prediction",
                "Diet Prediction Platform",
            ],
            loop: true,
            typeSpeed: 130,
            backSpeed: 80,
            backDelay: 1000,
        });

        return () => {
            typedInstance.current.destroy(); // Cleanup on unmount
        };
    }, []);

    return (
        <div className="">
            <div className="flex justify-center mx-auto text-richblack-25 w-full px-5 overflow-x-hidden gap-x-5 py-10 border-b-[1px] border-richblack-700">
                <div className="flex flex-col text-left sm:text-left max-w-[1160px] justify-center items-center bg-richblack-800 p-5 rounded-3xl">
                    <h1 className="text-[60px] sm:text-[60px] font-bold leading-none">
                        GenoriskAI
                    </h1>

                    <h1 className="text-2xl sm:text-3xl  my-4">
                        Disease & Diet Prediction makes super easy
                    </h1>

                    <p className="max-w-lg text-lg">
                        A Genome-Based Personalized Health Risk Prediction and Diet Recommendation Platform Unlock Your Health Potential with Personalized Insights
                    </p>

                    {/* Typing Effect */}
                    <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-blue-400">
                        GenoriskAI:  <span ref={typedRef} className="text-yellow-400"></span>
                    </h2>

                    <div className="flex justify-center items-center">
                        <div className="flex flex-col sm:flex-row gap-5 mt-5 justify-center items-center mx-auto">
                            <Link to="/login">
                                <button className="relative block group">
                                    <span className="absolute inset-0 bg-indigo-500 rounded-lg"></span>
                                    <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
                                        <div className="p-2">
                                            <p className="text-xl font-medium px-3">Login</p>
                                        </div>
                                    </div>
                                </button>
                            </Link>

                            <Link to="/register">
                                <button className="relative block group">
                                    <span className="absolute inset-0 bg-indigo-500 rounded-lg"></span>
                                    <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
                                        <div className="p-2">
                                            <p className="text-xl font-medium px-3">Register</p>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center sm:items-start mt-10 sm:mt-0 max-w-full gap-2 justify-center">
                    <div className="relative max-w-[500px]">
                        <img
                            src={image1}
                            alt="DNA Cell"
                            width="380px"
                            loading="lazy"
                            className="max-w-sm overflow-hidden shadow-lg rounded-xl"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center mx-auto text-richblack-25 w-11/12 px-5 overflow-x-hidden gap-x-5 mb-5">
                <div className="flex sm:text-left max-w-[1000px] justify-center items-center bg-richblack-800 p-3 m-5 rounded-2xl gap-4">
                    <p className="pl-2 text-lg text-blue-300">
                        Welcome to the Our platform leverages the latest advancements in genomics and machine learning to offer you personalized health risk predictions and diet recommendations based on your unique genetic profile. By analyzing your DNA, we provide actionable insights to help you make informed decisions about your health and wellness.
                    </p>

                    <div className=" px-5 py-2 bg-richblack-700  rounded-lg">
                        <img src={dr_image}
                        width={450}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
