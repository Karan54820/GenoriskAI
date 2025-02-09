import { Typography } from "@material-tailwind/react";
import dnaImage from '../assets/dna.png'
import Link from "antd/es/typography/Link";

export function Footer() {
    return (
        <div className="flex flex-col items-center justify-center bg-richblack-800  border-t-[0.01rem] border-richblack-700">
            <footer className="w-11/12 max-w-[1160px] pt-4 text-white h-40">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-white text-center md:justify-between">

                    <div className="flex justify-center items-center gap-1">
                        <img src={dnaImage} alt="" width={40} height={50} />
                        <p className="font-serif text-2xl text-richblack-5 font-semibold">GenoriskAI</p>
                    </div>

                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <Typography
                                as="a"
                                href="/about"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                About Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="/contact"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contact Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="/work"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Work
                            </Typography>
                        </li>
                    </ul>
                </div>
            </footer>


            <div className="w-full flex justify-center items-center bg-richblack-700 h-10 text-richblack-5 ">
                &copy; 2025 GenoriskAI | All Right Reserved
            </div>
        </div>

    );
}