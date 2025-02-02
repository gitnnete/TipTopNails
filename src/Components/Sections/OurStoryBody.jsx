import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
            Tip Top Nails, established in 2019, is a premier nail salon
            dedicated to providing exceptional nail care services. With a
            commitment to quality and customer satisfaction, Tip Top Nails has
            become a go-to destination for those seeking stylish and
            well-maintained nails. The salon prides itself on its welcoming
            atmosphere, skilled technicians, and attention to detail, ensuring
            every client leaves feeling pampered and confident. Whether you're
            looking for a classic manicure, a trendy nail design, or a relaxing
            spa treatment, Tip Top Nails offers a wide range of services
            tailored to meet your needs. Since its inception, the salon has
            built a reputation for excellence, combining creativity and
            professionalism to deliver outstanding results. Step into Tip Top
            Nails and experience the perfect blend of beauty, care, and
            artistry.
          </p>
          <p className="text-tertiary text-start" data-aos="fade-up">
            At Tip Top Nails, customer service is at the heart of everything we
            do. From the moment you walk through our doors, you’ll be greeted
            with a warm and friendly atmosphere designed to make you feel right
            at home. Our team of skilled professionals is dedicated to providing
            personalized attention, ensuring that every visit is tailored to
            your unique preferences and needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurStoryBody;
