import React from 'react'
import Customers  from "../assets/Customers 1.png";
import Featured  from "../assets/Featured Product 1.png";
import Group  from "../assets/Group 4.png";

const Section2 = () => {
    return (
        <div className=' flex items-center flex-col justify-center  bg-gradient-to-bl from-slate-100 via-slate-50 to-white'>
            <div className=' relative bottom-20 bg-gray-200 p-3 rounded-3xl
                flex flex-col items-center mx-6'>
                <img
                    src={Customers}
                    alt="Logo"
                    className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] lg:right-0 xl:-right-24  absolute  right-[-20px] top-20 md:top-28 lg:top-32 object-cover z-30"
                />
                <img
                    src={Featured}
                    alt="Logo"
                    className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] absolute object-cover left-[-40px] top-28 md:top-40 lg:top-52 xl:top-72 gap-0  z-30"
                />
                <div className="pb-4 text-gray-700 text-center text-sm md:text-lg lg:text-xl font-medium">
          See How We Create An Autonomous AI-Agent
        </div>
                <img src={Group} alt="" />
            </div>

        </div>
    )
}

export default Section2
