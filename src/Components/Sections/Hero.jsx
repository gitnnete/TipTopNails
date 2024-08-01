import React from "react";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      // Additional options can be added here
    });
  }, []);

  return (
    <div className="hero-section d-flex align-items-center justify-content-center">
      <div className="container pt-5">
        <div>
          <h1 className="text-danger fw-bold fs-1 mb-2" data-aos="fade-up">
            Let Us Take Care of your Nails
          </h1>
          <div className="fw-bold fs-2 d-inline" data-aos="fade-up">
            <span data-aos="fade-up">We specialize in </span>
            <span className="text-primary" data-aos="fade-up">
              <TypeAnimation
                sequence={[
                  "Manicures",
                  1000,
                  "Pedicures",
                  1000,
                  "Washes",
                  1000,
                ]}
                speed={40} // Custom speed
                wrapper="span"
                repeat={Infinity}
              />
            </span>
          </div>
          <div></div>
          <button
            type="button"
            class="btn btn-outline-danger btn-lg mt-5"
            data-aos="fade-up"
          >
            Danger
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
