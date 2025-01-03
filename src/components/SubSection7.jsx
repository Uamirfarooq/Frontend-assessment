import React from "react";
import Slider from "react-slick";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ellipse23 from "../assets/Ellipse 24.png";
import Ellipse24 from "../assets/Ellipse 23.png";

const testimonials = [
    {
        name: "Alex Martin",
        position: "Company, HR",
        text: "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has ",
        avatar: Ellipse23, // Replace with the actual image URL
    },
    {
        name: "John Doe",
        position: "Company, Recruiter",
        text: "Recruito has been a game-changer for our team. It's user-friendly, efficient, and helps us find the best talent quickly!",
        avatar: Ellipse24, // Replace with the actual image URL
    },
    {
        name: "Jane Smith",
        position: "Company, Manager",
        text: "Since using Recruito, we've noticed a significant improvement in the quality of our hires. Highly recommend!",
        avatar: Ellipse23, // Replace with the actual image URL
    },
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ padding: "20px", maxWidth: "100%", margin: "auto" }}> {/* Adjusted for responsiveness */}
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <Box key={index} sx={{ padding: "10px" }}> {/* Simplified padding for responsiveness */}
                        <Card
                            sx={{
                                borderRadius: "8px",
                                display: "flex",
                                flexDirection: "column",
                                padding: "16px",
                                boxShadow: 3,
                                height: "100%", // Ensure consistent height for cards
                            }}
                        >
                            <CardContent>
                                <Box display="flex" alignItems="center" gap="10px" marginBottom="10px">
                                    <Avatar src={testimonial.avatar} alt={testimonial.name} />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            {testimonial.position}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body2" color="text.primary">
                                    {testimonial.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
