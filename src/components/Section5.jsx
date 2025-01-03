import React from "react";
import { Grid, Box, Typography } from "@mui/material";
const Section5 = () => {
    return (
        <>
            <div className="bg-[#0B1928] p-4 md:p-2 overflow-hidden relative ">
                <img
                    src="../../public/Gabrun-Hero-BG-5 1.png"
                    alt="Logo"
                    className=" absolute  left-0 top-10 object-cover gap-0 "
                />
                <img
                    src="../../public/Gabrun-Hero-BG-5 2.png"
                    alt="Logo"
                    className=" absolute right-0 top-10  object-cover gap-0 "
                />
                <div className="flex flex-col items-center justify-center h-full max-w-[1180px] m-auto py-14">
                    <div>
                        <button className="border border-[#848EA033] font-instrument rounded-[30px] w-[110px] h-[40px] text-[14px] text-[#1BD1C2] font-normal">
                            Benefits
                        </button>
                    </div>
                    <div className="my-8 text-center">
                        <p className="text-[20px] md:text-[40px] font-semibold md:font-bold text-[#ffffff] font-instrument leading-tight">
                            &nbsp; Unlock the advantages of using
                            <br />
                            Recruito AI for your hiring needs.
                        </p>
                    </div>
                    <Grid container spacing={4} justifyContent="center" className="relative z-10">
                        {[
                            {
                                title: "Automate Processes",
                                description:
                                    "Let Recruito handle resume screening, scheduling, and interviews so you can focus on strategic decisions.",
                                svg: (
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 34 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.479 31.4118L9.3411 32.0304L9.95972 24.8925L24.8066 10.1408C25.0282 9.91416 25.2928 9.7341 25.585 9.61116C25.8771 9.48823 26.1909 9.4249 26.5078 9.4249C26.8248 9.4249 27.1385 9.48823 27.4307 9.61116C27.7228 9.7341 27.9874 9.91416 28.209 10.1408L31.2308 13.1863C31.4538 13.4075 31.6308 13.6706 31.7516 13.9606C31.8724 14.2505 31.9346 14.5615 31.9346 14.8756C31.9346 15.1897 31.8724 15.5007 31.7516 15.7906C31.6308 16.0806 31.4538 16.3437 31.2308 16.5649L16.479 31.4118ZM2.00331 9.45078C1.16817 9.30564 1.16817 8.10647 2.00331 7.96133C3.48151 7.70277 4.84944 7.01049 5.93318 5.9725C7.01693 4.93451 7.76754 3.5977 8.08958 2.13202L8.13955 1.90123C8.32038 1.07799 9.49576 1.07085 9.6861 1.89647L9.74558 2.16295C10.0773 3.62307 10.8336 4.95245 11.9191 5.98378C13.0046 7.01512 14.3709 7.70233 15.8461 7.95895C16.686 8.10171 16.686 9.30802 15.8461 9.45554C14.3708 9.71156 13.0042 10.3982 11.9183 11.4291C10.8323 12.4601 10.0755 13.7892 9.7432 15.2492L9.68134 15.518C9.49338 16.3413 8.318 16.3365 8.13717 15.5109L8.08958 15.2801C7.76722 13.8138 7.0159 12.4765 5.93124 11.4384C4.84658 10.4004 3.47761 9.70848 1.99855 9.45078H2.00331Z"
                                            stroke="#1BD1C2"
                                            strokeWidth="2.37931"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Provide Instant Information",
                                description:
                                    "Quickly access relevant candidate data, ensuring no talent is overlooked in your search.",
                                svg: (
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 34 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_55_945)">
                                            <path
                                                d="M7.13803 22.684C5.90601 22.4369 4.76106 21.869 3.81889 21.0376C2.68751 20.0488 1.87476 18.7467 1.4834 17.2959C1.09205 15.8452 1.13967 14.311 1.62025 12.8874C2.10082 11.4637 2.99277 10.2146 4.1833 9.29784C5.37382 8.38112 6.80946 7.83801 8.30865 7.73721C8.41197 7.73915 8.51372 7.71181 8.60215 7.65833C8.69057 7.60486 8.76204 7.52744 8.8083 7.43503C9.49532 5.44571 10.8434 3.75195 12.6279 2.6361C14.4123 1.52025 16.5254 1.04973 18.6147 1.30296C20.704 1.5562 22.6434 2.51789 24.1096 4.02774C25.5759 5.53758 26.4803 7.50435 26.6722 9.60021C26.6894 9.71007 26.7371 9.8129 26.8099 9.89702C26.8827 9.98113 26.9776 10.0432 27.0838 10.0761C28.5444 10.4193 29.8411 11.2576 30.7537 12.4486C31.6663 13.6395 32.1384 15.1097 32.0899 16.6093C32.0414 18.1089 31.4753 19.5454 30.4877 20.6749C29.5001 21.8044 28.1519 22.5572 26.6722 22.8054"
                                                stroke="#1BD1C2"
                                                strokeWidth="2.37931"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.7735 26.401C10.0644 26.2773 10.0644 25.2589 10.7735 25.1352C12.0289 24.9156 13.1905 24.3275 14.1108 23.4459C15.031 22.5642 15.6682 21.4287 15.9413 20.1839L15.9889 19.9864C16.1436 19.2845 17.1405 19.2797 17.2999 19.9792L17.3523 20.2077C17.6346 21.4485 18.2778 22.578 19.2007 23.454C20.1237 24.33 21.2853 24.9133 22.5392 25.1305C23.2506 25.2542 23.2506 26.2773 22.5392 26.401C21.2853 26.6182 20.1237 27.2015 19.2007 28.0775C18.2778 28.9535 17.6346 30.083 17.3523 31.3238L17.2999 31.5522C17.1405 32.2517 16.1436 32.247 15.9913 31.5451L15.9461 31.35C15.6728 30.1048 15.0353 28.9691 14.1146 28.0874C13.1939 27.2057 12.0317 26.6178 10.7759 26.3986L10.7735 26.401Z"
                                                stroke="#1BD1C2"
                                                strokeWidth="2.37931"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_55_945">
                                                <rect width="33.3103" height="33.3103" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                ),
                            },
                            {
                                title: "Make Data-Driven Decisions",
                                description:
                                    "Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team.",
                                svg: (
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 34 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_55_940)">
                                            <path
                                                d="M6.59082 19.7145C7.3667 18.6753 8.37455 17.8318 9.53406 17.251C10.6936 16.6702 11.9727 16.3682 13.2695 16.3691C15.2158 16.3691 17.0051 17.0353 18.4231 18.1536"
                                                stroke="#1BD1C2"
                                                strokeWidth="2.37931"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.0775 25.2892H3.74992C3.11888 25.2892 2.5137 25.0385 2.06749 24.5923C1.62128 24.1461 1.37061 23.5409 1.37061 22.9099V3.8754C1.37061 3.24437 1.62128 2.63918 2.06749 2.19298C2.5137 1.74677 3.11888 1.49609 3.74992 1.49609H22.7844C23.4154 1.49609 24.0206 1.74677 24.4668 2.19298C24.913 2.63918 25.1637 3.24437 25.1637 3.8754V11.0133"
                                                stroke="#1BD1C2"
                                                strokeWidth="2.37931"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.2672 12.7978C13.7359 12.7978 14.2 12.7055 14.633 12.5262C15.066 12.3468 15.4594 12.0839 15.7908 11.7525C16.1223 11.4211 16.3851 11.0277 16.5645 10.5947C16.7439 10.1617 16.8362 9.69756 16.8362 9.22888C16.8362 8.76019 16.7439 8.2961 16.5645 7.86309C16.3851 7.43009 16.1223 7.03665 15.7908 6.70524C15.4594 6.37383 15.066 6.11094 14.633 5.93158C14.2 5.75223 13.7359 5.65991 13.2672 5.65991C12.3207 5.65991 11.4129 6.03593 10.7436 6.70524C10.0743 7.37455 9.69824 8.28233 9.69824 9.22888C9.69824 10.1754 10.0743 11.0832 10.7436 11.7525C11.4129 12.4218 12.3207 12.7978 13.2672 12.7978ZM17.4643 25.1322C16.6292 24.9871 16.6292 23.7879 17.4643 23.6427C18.9425 23.3842 20.3104 22.6919 21.3942 21.6539C22.4779 20.6159 23.2285 19.2791 23.5506 17.8134L23.6006 17.5826C23.7814 16.757 24.9568 16.7523 25.1447 17.5755L25.2066 17.8444C25.5389 19.3044 26.2957 20.6335 27.3816 21.6644C28.4676 22.6953 29.8342 23.382 31.3095 23.638C32.1494 23.7855 32.1494 24.9894 31.3095 25.1369C29.8342 25.393 28.4676 26.0796 27.3816 27.1106C26.2957 28.1415 25.5389 29.4706 25.2066 30.9306L25.1447 31.1994C24.9568 32.0227 23.7814 32.0179 23.6006 31.1923L23.5506 30.9615C23.2285 29.4958 22.4779 28.159 21.3942 27.121C20.3104 26.083 18.9425 25.3907 17.4643 25.1322Z"
                                                stroke="#1BD1C2"
                                                strokeWidth="2.37931"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_55_940">
                                                <rect width="33.3103" height="33.3103" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                ),
                            },
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        p: 3,
                                        border: "1px solid rgba(132, 142, 160, 0.2)",
                                        borderRadius: "10px",
                                        backgroundColor: "#152232",
                                        textAlign: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            p: "13px",
                                            border: "2px solid #848EA033",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        {item.svg}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: "21px",
                                            fontFamily: "Instrument Sans, sans-serif",
                                            color: "#ffffff",
                                            my: "15px",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: "16px",
                                            fontFamily: "Instrument Sans, sans-serif",
                                            color: "#848EA0",
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default Section5;