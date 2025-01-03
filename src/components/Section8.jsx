import React from 'react'
import Ellipse28 from "../assets/Ellipse 28.png";
import Ellipse27 from "../assets/Ellipse 27.png";
import Ellipse26 from "../assets/Ellipse 26.png";
import Layer1 from "../assets/Layer_1.png";
import Grid1 from "../assets/grid1 1.png";

const Section8 = () => {
    return (
        <div className='flex flex-col items-center justify-center w-[100vhw h-[350px] md:h-[450px] m-auto text-center relative'>
            <img
                src={Ellipse28}
                alt="Logo"
                className=" absolute  top-20 "
            />
            <img
                src={Ellipse27}
                alt="Logo"
                className=" absolute  top-[88px] "
            />
            <img
                src={Ellipse26}
                alt="Logo"
                className=" absolute  top-24 "
            />
            <img
                src={Layer1}
                alt="Logo"
                className=" absolute  top-28 "
            />
            <img
                src={Grid1}
                alt="Logo"
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] absolute  top-28 right-0 lg:right-20 xl:right-40"
            />
            <img
                src={Grid1}
                alt="Logo"
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] absolute  top-28 left-0 lg:left-20 xl:left-40"
            />
             <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-56 ">
                Ready to enhance your <br /> hiring process?
            </h3>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full py-2 px-6 md:px-8 text-sm md:text-base lg:text-lg text-white my-6 md:my-8">
                Request a Demo
            </button>
        </div>
    )
}

export default Section8
