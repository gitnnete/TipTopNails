import React from "react";
import headerBg from "../../assets/feetnail.jpg";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStoryHead = () => {
  const headerStyle = {
    backgroundImage: `url(${headerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center", // Assuming you have a variable for navbar height
    height: "140px", // Adjust this value as necessary
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
  };

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      // Additional options can be added here
    });
  }, []);

  return (
    <div style={headerStyle}>
      <h1 data-aos="fade-up">Our Story</h1>
    </div>
  );
};

export default OurStoryHead;
