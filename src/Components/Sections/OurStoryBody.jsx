import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";


const OurStoryBody = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
          // Additional options can be added here
        });
      }, []);


  return (
    <>
      <div className="container">
        <div className="text-center lead my-5">
          <p className="text-tertiary text-start mb-5" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            consequatur dolorum nostrum totam nobis! Iure natus, ducimus vero
            ipsum aperiam fugiat optio quasi explicabo unde repudiandae minus
            aspernatur. Doloribus labore, facilis recusandae sunt repellendus,
            ea iure fuga ut explicabo consequatur dolorum eius neque dicta
            tempora tenetur aliquam rerum harum. Laudantium deserunt in
            voluptatum nihil aliquam, dolor blanditiis alias nulla fugiat?
          </p>
          <p className="text-tertiary text-start" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            consequatur dolorum nostrum totam nobis! Iure natus, ducimus vero
            ipsum aperiam fugiat optio quasi explicabo unde repudiandae minus
            aspernatur. Doloribus labore, facilis recusandae sunt repellendus,
            ea iure fuga ut explicabo consequatur dolorum eius neque dicta
            tempora tenetur aliquam rerum harum. Laudantium deserunt in
            voluptatum nihil aliquam, dolor blanditiis alias nulla fugiat?
          </p>
        </div>
      </div>
    </>
  );
};

export default OurStoryBody;
