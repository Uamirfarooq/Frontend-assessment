import React from 'react';
import SubSection6 from './SubSection6';
import Button from '@mui/material/Button';

const Section6 = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 relative mb-24">
            {/* Hero Image Section */}
            <div className="flex items-center justify-center absolute  flex-col  w-full top-0 mx-auto">
                <img
                    src="../../public/About-Us-Hero-BG-2 1.png"
                    alt="Hero Background"
                    className="w-full h-auto bg-gradient-to-t from-white to-blue-50"
                />
            </div>
                <div className=" flex items-center justify-center mb-32">
                    <SubSection6 />
                </div>

            {/* Button Section */}
            <Button
                variant="outlined"
                sx={{
                    borderRadius: "60px", // Rounded full equivalent
                    paddingX: 4,         // Adjust padding for responsiveness
                    marginY: 4,
                    fontSize: '0.875rem', // Adjust font size for smaller screens
                    '@media (min-width:600px)': {
                        paddingX: 6, // Larger padding for medium screens
                        fontSize: '1rem',
                    },
                }}
            >
                Testimonials
            </Button>

            {/* Heading Section */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-4 md:mt-6">
                Don’t just take our word for it—see <br /> 
                what our clients say about Recruito AI.
            </h3>
        </div>
    );
};

export default Section6;
