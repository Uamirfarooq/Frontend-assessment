import React from "react";
import docker from "../assets/docker-pattern-right 4.png";
import Gabrun from "../assets/Gabrun-Minutes-BG 1.png";
import Group10 from "../assets/Group 10.png";
import Group9 from "../assets/Group 9.png";
import Group8 from "../assets/Group 8.png";
import Group18 from "../assets/Group 18.png";
import Group17 from "../assets/Group 17.png";
import Group16 from "../assets/Group 16.png";
import Group15 from "../assets/Group 15.png";
import Group13 from "../assets/Group 13.png";
import Group12 from "../assets/Group 12.png";
import Group11 from "../assets/Group 11.png";
import solar from "../assets/solar_magnifer-outline.png";
import image from "../assets/image.png";


const Section4 = () => {
    return (
        <div className="w-[100vw] py-6 flex items-center justify-center relative">
            <img
                src={docker}
                alt="Background Pattern"
                className="w-[350px] h-[350px] rotate-180 absolute  top-32 right-0  opacity-90 hidden lg:block"
            />
            <img
                src={docker}
                alt="Background Pattern"
                className="w-[350px] h-[350px] rotate-180 absolute top-[1000px] right-0  opacity-90 hidden lg:block"
            />
            <img
                src={docker}
                alt="Background Pattern"
                className="w-[350px] h-[350px] rotate-180 absolute -bottom-20 right-0  opacity-90 hidden lg:block"
            />
            <img
                src={docker}
                alt="Background Pattern"
                className="w-[400px] h-[400px]  absolute top-[600px] -left-10  opacity-90 hidden lg:block"
            />
            <img
                src={docker}
                alt="Background Pattern"
                className="w-[400px] h-[400px] absolute top-[1400px] -left-10  opacity-90 hidden lg:block"
            />


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2 md:px-44">
                {/* Box 1 */}
                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px] flex flex-col justify-center  text-center lg:pr-32 xl:pr-0">
                    <h2 className="text-xl md:text-1xl  xl:text-4xl font-semibold md:font-bold  text-gray-900 mb-4">
                        Candidate Sourcing & Job Posting
                    </h2>
                    <p className="text-sm md:text-xl text-gray-600">
                        Recruito automatically posts your position or actively hunts top
                        candidates across multiple platforms. No human intervention needed.
                    </p>
                </div>
                {/* Box 2 */}
                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px] border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg relative ">
                    <img
                        src={Gabrun}
                        alt="Logo"
                        className="h-[100px] sm:h-[100px] md:h-[120px] lg:h-[150px] absolute right-0 top-0 object-contain gap-0  z-30"
                    />
                    <img
                        src={Group10}
                        alt="Logo"
                        className="h-[160px] sm:h-[160px] md:h-[200px] lg:h-[280px] absolute left-5 top-16   object-contain gap-0  z-30"
                    />
                    <img
                        src={Group8}
                        alt="Logo"
                        className="h-[200px] sm:h-[200px] md:h-[250px] lg:h-[350px]  absolute z-50 top-8 object-contain gap-0 "
                    />
                    <img
                        src={Group9}
                        alt="Logo"
                        className="h-[160px] sm:h-[160px] md:h-[200px] lg:h-[280px] absolute right-5 top-16  object-contain gap-0  z-30"
                    />

                </div>

                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px] border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg relative">
                    <img
                        src={Gabrun}
                        alt="Logo"
                        className=" h-[150px] absolute left-0 top-0 object-contain gap-0  z-30"
                    />

                    <img
                        src={Group13}
                        alt="Logo"
                        className="w-[430px] absolute top-14  object-contain gap-0  z-30"
                    />
                    <img
                        src={Group12}
                        alt="Logo"
                        className="w-[400px]  absolute   object-contain gap-0  z-30"
                    />
                    <img
                        src={Group11}
                        alt="Logo"
                        className="w-[370px]  absolute bottom-14  object-contain gap-0  z-30"
                    />
                    <img
                        src={solar}
                        alt="Logo"
                        className="  absolute right-5 bottom-5  object-contain gap-0  z-10"
                    />

                </div>

                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px] flex flex-col justify-center  text-center lg:pl-32 xl:pr-0">
                    <h2 className="text-xl md:text-xl xl:text-4xl font-semibold md:font-bold  text-gray-900 mb-4">
                        Automated Resume Screening & Filtering
                    </h2>
                    <p className="text-sm md:text-xl text-gray-600">
                        Our AI instantly sorts and prioritizes resumes, highlighting only the strongest matches and discarding unqualified applicants.
                    </p>
                </div>

                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px] flex flex-col justify-center  text-center lg:pr-32 xl:pr-0">
                    <h2 className="text-xl md:text-xl xl:text-4xl font-semibold md:font-bold  text-gray-900 mb-4">
                        Online Assessment
                    </h2>
                    <p className="text-sm md:text-xl text-gray-600">
                        Candidates complete a quick skill or behavioral test to validate their capabilities. This process is seamlessly integrated and fully automated.
                    </p>
                </div>
                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px] border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg relative">
                    <img
                        src={Gabrun}
                        alt="Logo"
                        className=" h-[150px] absolute right-0 top-0 object-contain gap-0  z-30"
                    />
                    <div className=" border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg relative p-0 md:p-8 z-50">
                        <div className="flex ">
                            <div className="flex items-center justify-center w-14 h-14 ">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500 focus:ring-2 accent-green-600"
                                />

                            </div>
                            <div className="shrink w-56 lg:w-64 h-12 px-4 flex items-center justify-start border border-gray-200 text-gray-400 font-medium line-through rounded-lg">
                                1- Creative Design Skills Test
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex items-center justify-center w-14 h-14 ">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500 focus:ring-2 accent-green-600"
                                />

                            </div>
                            <div className="shrink w-56 lg:w-64  h-12 px-4 flex items-center justify-start border border-gray-200 text-gray-400 font-medium line-through rounded-lg">
                                2- UX/UI Design Challenge
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex items-center justify-center w-14 h-14 ">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500 focus:ring-2 accent-green-600"
                                />

                            </div>
                            <div className="shrink w-56 lg:w-64  h-12 px-4 flex items-center justify-start border border-gray-200 text-gray-400 font-medium line-through rounded-lg">
                                3- Problem-Solving Task
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex items-center justify-center w-14 h-14 ">
                                <input
                                    type="checkbox"

                                    className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500 focus:ring-2 accent-green-600"
                                />

                            </div>
                            <div className="shrink w-56 lg:w-64  h-12 px-4 flex items-center justify-start border border-gray-200  text-gray-800 font-medium rounded-lg">
                                3- Problem-Solving Task
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px] border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg relative">
                    <img
                        src={Gabrun}
                        alt="Logo"
                        className=" h-[150px] absolute left-0 top-0 object-contain gap-0  z-30"
                    />
                    <img
                        src={image }
                        
                        alt="Logo"
                        className=" z-40 h-[200px] lg:h-[300px]  absolute right-10 lg:right-20  object-contain gap-0 "
                    />
                    <img
                        src={Group15}
                        alt="Logo"
                        className="h-[150px] lg:h-[300px] absolute z-50 right-[-20px] top-16"
                    />
                </div>

                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px] flex flex-col justify-center  text-center lg:pl-32 xl:pr-0">
                    <h2 className="text-xl md:text-xl xl:text-4xl font-semibold md:font-bold  text-gray-900 mb-4">
                        AI Video Interviews
                    </h2>
                    <p className="text-sm md:text-xl text-gray-600">
                        An AI-driven virtual interviewer conducts dynamic, adaptive interviews, capturing both technical insights and soft skills. Everything is entirely hands-free.
                    </p>
                </div>
                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px] flex flex-col justify-center  text-center lg:pr-32 xl:pr-0">
                    <h2 className="text-xl md:text-xl xl:text-4xl font-semibold md:font-bold  text-gray-900 mb-4">
                        Final Shortlist for the Line Manager
                    </h2>
                    <p className="text-sm md:text-xl text-gray-600">
                        Recruito presents a curated list of the top performers, complete with interview recordings and evaluations, so you can make a swift, confident hiring decision.
                    </p>
                </div>




                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[380px]  border-t-[1px] border-gray-300  flex flex-col items-center justify-center bg-white shadow-md rounded-lg relative">
                    <img
                        src={Gabrun}
                        alt="Logo"
                        className=" h-[150px] absolute right-0 top-0 object-contain gap-0  z-30"
                    />
                    <img
                        src={Group16}
                        alt="Logo"
                        className=" absolute top-14  object-contain gap-0  z-30"
                    />
                    <img
                        src={Group17}
                        alt="Logo"
                        className=" absolute  top-36 object-contain gap-0  z-30"
                    />
                    <img
                        src={Group18}
                        alt="Logo"
                        className="absolute top-56     object-contain gap-0  z-30"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section4;
