import React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Counter = () => {
  const [startCounter, setStartCounter] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setStartCounter(true);
    }
  }, [inView]);


  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      // Additional options can be added here
    });
  }, []);

  return (
    <>
      <div className="container bg-secondary rounded my-5" data-aos="fade-up">
        <div className="row text-center py-3 text-white" ref={ref}>
          <div className="col-md-4 col-sm-6 col-12 mb-4">
          <span className="fs-3 text-danger fw-bold">{startCounter && <CountUp end={92} duration={4} suffix="%" />}</span>
            <h3>Success Rate</h3>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-4">
          <span className="fs-3 text-danger fw-bold">{startCounter && <CountUp end={500} duration={4} />}</span>
            <h3>Total Number of Customers</h3>
          </div>
          <div className="col-md-4 col-sm-12 col-12 mb-4">
          <span className="fs-3 text-danger fw-bold">{startCounter && <CountUp end={6} duration={5} />}</span>
            <h3>Number of Stores</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
