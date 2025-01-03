import React from 'react'

const Section8 = () => {
    return (
        <div className='flex flex-col items-center justify-center w-[100vhw h-[350px] md:h-[450px] m-auto text-center relative'>
            <img
                src="../../public/Ellipse 28.png"
                alt="Logo"
                className=" absolute  top-20 "
            />
            <img
                src="../../public/Ellipse 27.png"
                alt="Logo"
                className=" absolute  top-[88px] "
            />
            <img
                src="../../public/Ellipse 26.png"
                alt="Logo"
                className=" absolute  top-24 "
            />
            <img
                src="../../public/Layer_1.png"
                alt="Logo"
                className=" absolute  top-28 "
            />
            <img
                src="../../public/grid1 1.png"
                alt="Logo"
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] absolute  top-28 right-0 lg:right-20 xl:right-40"
            />
            <img
                src="../../public/grid1 1.png"
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
